import React from 'react';
import welove1 from '../../assets/welove1.jpg'; 
import welove2 from '../../assets/welove2.jpg'; 

const WeLoveWhatWeDo = () => {
  return (
    <>
    <section className="flex justify-center py-20 max-sm:py-10 max-md:py-15">
      <div className="flex justify-center items-center flex-wrap-reverse basis-[80%] gap-[4%] gap-y-5">
        <div className="flex justify-center gap-4 max-md:w-[100%] w-[48%] min-w-[300]">
          <div>
            <img src={welove1} alt="welove1.jpg" />
          </div>
          <div>
            <img src={welove2} alt="welove2.jpg" />
          </div>
        </div>
        <div className="flex flex-col  items-start justify-center max-md:w-[80%] w-[48%] gap-5">
          <p className="font-bold text-base text-primary">
            Featured Products
          </p>
          <h2 className="font-bold text-4xl ">We love what we do</h2>
          <p className="text-iconGray">
            Problems trying to resolve the conflict between<br/> the two major
            realms of Classical physics:<br/> Newtonian mechanics.
          </p>
          <p className="text-iconGray">
          Problems trying to resolve the conflict between<br/> the two major
          realms of Classical physics:<br/> Newtonian mechanics.
          </p>
        </div>
      </div>
    </section>
  </>
  );
};

export default WeLoveWhatWeDo;
