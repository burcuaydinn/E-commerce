import React from "react";
import productImage from '../../assets/ProductDescription.jpg'; // Resmi import ediyoruz

const ProductDescription = () => {
  return (
    <>
      <section className="flex justify-center pb-10 pt-10 max-sm:py-10 max-md:pb-5">
        <div className="basis-[90%] flex flex-col">
          {/* Tab kısmı */}
          <section className="pb-7 text-center">
            <div className="flex justify-center gap-7 font-bold text-iconGray text-sm pb-7">
              <h6>Description</h6>
              <h6>Additional Information</h6>
              <h6>
                Reviews (<span className="text-secondary">0</span>)
              </h6>
            </div>
            <div className="border-[1px] border-lightGray" />
          </section>

          {/* İçerik ve resim bölümü */}
          <section className="flex justify-center items-center text-left gap-10 max-lg:flex-col px-7">
            <div className="relative basis-[30%] aspect-[1/1.15] max-h-96 rounded-md shadow-[0_17px_30px_-15px_rgba(0,0,0,0.3)] shadow-black">
              <img
                src={productImage}
                alt="Product Description"
                className="object-contain w-full h-full rounded-md"
              />
            </div>

            {/* Metin ve Liste Bölümü */}
            <section className="basis-[60%] flex max-sm:flex-col justify-center gap-10">
              <article className="basis-[45%] text-md max-xl:text-sm">
                <h3 className="font-bold text-2xl max-xl:text-xl basis-[35] mb-5">
                  the quick fox jumps over
                </h3>
                <p className="mb-2">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="mb-2">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </article>

              {/* Sağ Taraf Listeleme Bölümü */}
              <article className="flex flex-col gap-5">
                <section>
                  <h3 className="font-bold text-2xl max-xl:text-xl mb-5">
                    the quick fox jumps over
                  </h3>
                  {[...Array(5)].map((_, i) => (
                    <div className="flex gap-2 text-iconGray max-xl:text-sm" key={i}>
                      <i className="fa-solid fa-chevron-right max-xl:text-sm"></i>
                      <h6>the quick fox jumps over the lazy dog</h6>
                    </div>
                  ))}
                </section>

                <section>
                  <h3 className="font-bold text-2xl max-xl:text-xl mb-5">
                    the quick fox jumps over
                  </h3>
                  {[...Array(5)].map((_, i) => (
                    <div className="flex gap-2 text-iconGray max-xl:text-sm" key={i}>
                      <i className="fa-solid fa-chevron-right max-xl:text-sm"></i>
                      <h6>the quick fox jumps over the lazy dog</h6>
                    </div>
                  ))}
                </section>
              </article>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProductDescription;
