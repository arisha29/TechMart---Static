import React,{useEffect} from 'react';

const TermsCond = () => {

  useEffect(() => {
    document.title = "TechMart - Terms & Conditions";
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="w-4/5 mx-auto text-center">
        <h1 className="text-3xl md:tracking-wider font-bold mt-5 text-[#203a5f]">
          Terms and Conditions of Sales
        </h1>
        <div className="text-start text-sm leading-8 py-2">
          <div className="mt-5 md:text-xl tracking-wide">
            <p>
              Terms and Conditions applicable to the sales of TechMart products
              on TechMart.com:
            </p>
            <p>
              The following terms and conditions (“Terms of Use”) constitute a
              binding agreement between you and TechMart, regarding your access
              and use of the Website, all content and material available on or
              through the Website.
            </p>
            <p>The following Terms of Use apply to </p>
            <li>your use of the website TechMart.com</li>
            <li>
              the offer by you and the acceptance of the said offer and the
              resulting contract between you and TechMart in respect of any
              TechMart products listed for sale on the Website.
            </li>
            <p>
              PLEASE ENSURE THAT YOU READ THESE TERMS OF USE CAREFULLY AS THEY
              AFFECT YOUR LEGAL RIGHTS AND RESPONSIBILITIES.
            </p>
          </div>
          <div className="mt-5 md:text-xl tracking-wide">
            <h1 className="font-bold text-[#29456b] md:tracking-wider">
              Conditions of Use of Website
            </h1>
            <li>
              We reserve the right to revise these Terms of Use at any time
              without prior notice by posting the revised Terms on the Website.
              It is your responsibility to regularly review these Terms. Your
              continued use of the Website constitutes acceptance of the revised
              Terms.
            </li>
            <li>
              Orders placed on the Website are subject to the Terms of Use in
              effect at the time of purchase. Your order is considered placed
              upon completion of the online checkout process.
            </li>
            <li>
              You may use the Website only if you have reached the age of
              majority according to the laws of Pakistan, have the legal
              capacity to enter into an agreement, and are purchasing products
              for delivery within Pakistan. Your use of the Website must comply
              with all applicable laws.
            </li>
          </div>
          <div className="mt-5 md:text-xl tracking-wide">
            <h1 className="font-bold text-[#29456b] md:tracking-wider">
              Sale of TechMart Products:
            </h1>
            <li>
              All sales-related obligations for MX Products are borne by M&P,
              while all sales-related obligations for CE Products are borne by
              Rockmars. All issues related to sale, delivery, payments, and
              exchanges are therefore the obligations of M&P or Rockmars (as
              applicable). TechMart will endeavor to assist and support the
              customer but assumes no liability.
            </li>
            <li>
              By purchasing any products or placing any order on the Website,
              you acknowledge that your buyer-seller relationship, in the case
              of MX Products, shall be with M&P, and in the case of CE Products,
              shall be with Rockmars, and not with TechMart.
            </li>
            <li>Any sales of products are subject to availability.</li>
          </div>
          <div className="mt-5 md:text-xl tracking-wide">
            <h1 className="font-bold text-[#29456b] md:tracking-wider">
              Shipping Policy
            </h1>
            <li>
              Orders are processed within 1-2 business days, excluding weekends
              and holidays.
            </li>
            <li>We offer standard, expedited, and express shipping options.</li>
            <li>
              Rates are based on shipping method, package weight, and
              destination.
            </li>
            <li>Delivery times vary based on method and destination.</li>
            <li>Tracking information is provided once your order ships.</li>
            <li>Carriers will attempt delivery per standard procedures.</li>
            <li>
              Additional duties or taxes may apply for international orders.
            </li>
            <li>Contact us for any shipping-related inquiries.</li>
            <p>
              By ordering from TechMart, you agree to these terms. We aim to
              ensure timely delivery and customer satisfaction with every
              purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsCond;