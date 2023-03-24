import ProgressBar from '../ProgressBar/ProgressBar';
const Info = () => {
  return (
    <>
      <div>
        <div>
          <p>After 4 years 1 month</p>
          <div>
            <div>
              <p>Accumulated, &#37;:</p>
              <p>28&#37;</p>
            </div>
            <div>
              <p>Accumulated, UAH:</p>
              <p>60 000 &#8372;</p>
            </div>
            <div>
              <p>And this:</p>
              <p>22 кв. м</p>
            </div>
          </div>
          <ProgressBar />
        </div>
        <div>
          <input type="file" />
        </div>
      </div>
      <div>
        <p>
          To add more 1 sq.m for planning, it remains to accumulate
          <span>14 000 &#8372;</span>
        </p>
        <img src="" alt="" />
      </div>
    </>
  );
};

export default Info;
