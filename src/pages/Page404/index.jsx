import './Page404.scss';
function Page404(){
    return (
       <main>
        <section className='page-error'>
            <p className="error404">404</p>
            <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
            <a href="/" className='return-text'>Retourner sur la page d’accueil</a>
        </section>
       </main>
    );
}
export default Page404;