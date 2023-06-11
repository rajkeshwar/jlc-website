---
title: Angular Blog
author: Srinivas Dande
date: August 13, 2022
category: Angular
description: Angular begginers's course
---

# How to prevent XML external entity attack (XXE attack)

![author image](https://secure.gravatar.com/avatar/622c70d2908e68ecc070ca6754245bb2?s=60&d=mm&r=g)

By [mkyong](https://mkyong.com/author/mkyong/ "mkyong") | Last updated: July 27, 2022

Viewed: 6,020 (+206 pv/w)

Tags:[java security](https://mkyong.com/tag/java-security/) | [java xml](https://mkyong.com/tag/java-xml/) | [xxe](https://mkyong.com/tag/xxe/)

[< Previous](/java/jaxb-hello-world-example/ "JAXB XML to Objects")[Next >](/java/java-convert-string-to-xml/ "Convert String to XML")

This article talks about XML external entity attack (XXE attack) and how to prevent XXE from a list of the popular XML parsers like DOM, SAX, JDOM, etc.

- [1\. What is XML external entity attack (XXE attack)](#what-is-xml-external-entity-attack-xxe-attack)
- [2\. XXE attack example](#xxe-attack-example)
- [3\. How to prevent XXE attack in SAX parser](#how-to-prevent-xxe-attack-in-sax-parser)
- [4\. Sonar Rule to prevent XXE attack in XML parser](#sonar-rule-to-prevent-xxe-attack-in-xml-parser)
- [5\. Download Source Code](#download-source-code)
- [6\. References](#references)

[](#what-is-xml-external-entity-attack-xxe-attack)1\. What is XML external entity attack (XXE attack)

---

The XML external entity attack (also known as [XXE attack](https://en.wikipedia.org/wiki/XML_external_entity_attack)) is an attack against an application that parses XML data that containing the external entities. The XML parser will load the external entities’ content from the server file system or network, which may lead to arbitrary file disclosures or [server-side request forgery (SSRF)](https://en.wikipedia.org/wiki/Server-side_request_forgery) vulnerabilities.

**Note**  
See [CWE-611](https://cwe.mitre.org/data/definitions/611.html)

freestar.config.enabled_slots.push({ placementName: "mkyong_incontent_leaderboard_atf", slotId: "mkyong_incontent_leaderboard_atf" });

[](#xxe-attack-example)2\. XXE attack example

---

This example shows how to use the XXE attack to retrieve the content of the files on the server.

2.1 An application parses the below XML file, gets the staff id and displays the staff’s name.

staff.xml

      <?xml version="1.0" encoding="utf-8"?>
      <company>
        <staffId>1001</staffId>
      </company>

Output

      <?xml version="1.0" encoding="utf-8"?>
      <company>
        <staffId>Yong Mook Kim</staffId>
      </company>

2.2 Now, the attacker manipulates the incoming XML file’s content, replacing the XML data with a malicious external entity that references the server’s file `/etc/passwd`.

staff.xml

      <?xml version="1.0" encoding="UTF-8"?>
      <!DOCTYPE foo [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>
      <company>
          <staffId>&xxe;</staffId>
      </company>

When the XML parser parses the above malicious external entity, it will include the file `/etc/passwd` content at the corresponding position. For a weakly configured XML parser (typically, it is the default XML parser), the `&xxe;` entity will be replaced by the contents of the file `/etc/passwd`.

Output

      <?xml version="1.0" encoding="utf-8"?>
      <company>
        <staffId>nobody:*:-2:-2:Unprivileged User:/var/empty:/usr/bin/false
        root:*:0:0:System Administrator:/var/root:/bin/sh
        daemon:*:1:1:System Services:/var/root:/usr/bin/false
        </staffId>
      </company>

Here’s a SAX XML parser that is vulnerable to XXE attack.

ReadXmlSaxParserXXE.java

```java
 package com.mkyong.xml.sax;

    import com.mkyong.xml.sax.handler.PrintAllHandlerSax;
    import org.xml.sax.SAXException;

    import javax.xml.parsers.ParserConfigurationException;
    import javax.xml.parsers.SAXParser;
    import javax.xml.parsers.SAXParserFactory;
    import java.io.IOException;

    public class ReadXmlSaxParserXXE {

      private static final String FILENAME = "src/main/resources/staff.xml";

      public static void main(String[] args) {

          SAXParserFactory factory = SAXParserFactory.newInstance();

          try {

              // XXE attack
              SAXParser saxParser = factory.newSAXParser();

              PrintAllHandlerSax handler = new PrintAllHandlerSax();

              saxParser.parse(FILENAME, handler);

          } catch (ParserConfigurationException | SAXException | IOException e) {
              e.printStackTrace();
          }

      }

    }
    ```


[](#how-to-prevent-xxe-attack-in-sax-parser)3\. How to prevent XXE attack in SAX parser

------------------------------------------------------------------------------------------

We can use `setFeature` for the SAX parser to disable the DOCTYPE declaration completely.


      SAXParserFactory factory = SAXParserFactory.newInstance();

      try {

          // https://rules.sonarsource.com/java/RSPEC-2755
          // prevent XXE, completely disable DOCTYPE declaration:
          factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);

          SAXParser saxParser = factory.newSAXParser();

          PrintAllHandlerSax handler = new PrintAllHandlerSax();

          saxParser.parse(FILENAME, handler);

      } catch (ParserConfigurationException | SAXException | IOException e) {
          e.printStackTrace();
      }


Now, if the SAX parser parses any external entities, it will prompt an error:

Output
