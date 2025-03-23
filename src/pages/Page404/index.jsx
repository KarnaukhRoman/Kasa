function Page404(){
    return (
       <main>
        <section className='page-error'>
            <p className="page-error__code">404</p>
            <p className="page-error__text">Oups! La page que vous demandez n'existe pas.</p>
            <a href="/" className='page-error__link'>Retourner sur la page d’accueil</a>
        </section>
       </main>
    );
}
export default Page404;