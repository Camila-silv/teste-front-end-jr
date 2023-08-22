export default function ContainerProducts({title, children}) {
    return (
        <section className="main-content__section-products">
        <div className="section-products__container-title">
          <hr className="container-title__line" noshade="true" />
          <h2 className="container-title__title">{title}</h2>
          <hr className="container-title__line" noshade="true" />
        </div>

        {children}
      </section>
    )
}