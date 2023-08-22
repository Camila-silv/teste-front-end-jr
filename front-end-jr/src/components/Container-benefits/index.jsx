import {Image} from "../index";

export default function ContainerBenefits({ children, src, alt }) {
  return (
    <div className="container-benefits__benefits">
      <Image
        src={src}
        alt={alt}
      />

      <div className="benefits__benefit-tag">{children}</div>
    </div>
  );
}
