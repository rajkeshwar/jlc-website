---
title: Steps to develop second React application
author: Srinivas Dande
date: June 11, 2023
category: React
description: In this blog you will learn how to develop second React application step by step
---

### Steps to develop first Angular application

1. Install Node JS(10.15.3)
   [Download Nodejs here](https://nodejs.org/en)

2. Install VisulaSource Code
   [Download VS Code here](https://code.visualstudio.com/Download)

3. Insall Anugular CLI
   --Go to command prompt and type the foollowing

```sh
d:/sri>npm install -g @angular/cli
```

4. Create your First Angular project.
   **_create the folder to keep all of your angular projects and go to that folder_**

```sh
D:\> mkdir Apps
D:\> cd Apps
D:\Apps>ng new hello-app
```

5. Start the Server

```sh
cd hello-app
D:\Apps\hello-app>ng serve
```

6. Open the browser and type the following
   [http://localhost:4200](http://localhost:4200)

7. Open your angular project in VS Code Editor
8. You can see the following files from Angular Project
   - index.html
   - app.module.ts
   - app.component.ts
   - app.component.html
   - package.json


9. Update the files as follows



### index.html 
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>HelloApp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```


### app.module.ts
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### app.component.ts 
```ts 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello guys welcome to first Angular app';
}

```

### app.component.html
```html
<h1>Welcome to JLC!!! </h1>
<p class="hello">{{ title }}</p>
```

### app.component.css
```css
.hello {
    color: red;
}
```
