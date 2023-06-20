import Loading from "@/components/Loading";

const ReviewPart = ({ courseReviews }) => {
  if (!courseReviews) return <Loading />;
  return (
    <>
      <h4 className="mb-16">Students Reviews</h4>
      <div className="content pt-30 pb-30">
        {courseReviews.map((review) => (
          <div
            className="cource-review-box white-bg mb-30 py-20"
            key={review.reviewId}
          >
            <div className="flex-row items-center">
              <h4 className="review-student">{review.studentName}</h4>
              <span className="review-company">
                - Java Developer at{" "}
                <span className="faq-ans ml-5">{review.company}</span>
              </span>
            </div>
            <div className="text">{review.reviewText}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewPart;
