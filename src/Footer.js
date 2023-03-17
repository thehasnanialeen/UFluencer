function Footer() {
    return(
        <footer className="text-center mt-5">
          <div className="container p-4 pb-0">
            <section className="mb-1">
              <a
                className="text-black btn-floating m-2"
                href="#!"
                ><i className="bi bi-facebook"></i
              ></a>

              <a
                className="text-black btn-floating m-2"
                href="#!"
                role="button"
                ><i className="bi bi-google"></i
              ></a>

              <a
                className="text-black btn-floating m-2"
                href="#!"
                role="button"
                ><i className="bi bi-twitter"></i
              ></a>

              <a
                className="text-black btn-floating m-2"
                href="#!"
                role="button"
                ><i class="bi bi-instagram"></i
              ></a>

              <a
                className="text-black btn-floating m-2"
                href="#!"
                role="button"
                ><i className="bi bi-linkedin"></i
              ></a>

            </section>
          </div>

          <div className="my-2">
            <span><i class="bi bi-envelope-fill me-2"></i>info@UFluence.com</span>
            <span><i class="bi bi-telephone-fill ms-4 me-2"></i>+1 306-585-9999</span>
          </div>

          <div className="text-center pb-3" >
            © 2023 Copyright:
            <a className="text-white ms-2" href="/">UFluence.com</a>
          </div>
      </footer>
    );
}

export default Footer;