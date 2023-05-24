<!DOCTYPE html>
<html lang="en">
<head>

     <title>Dinas Koperasi dan Usaha Mikro</title>
<!--

DIGITAL TREND

https://templatemo.com/tm-538-digital-trend

-->
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=Edge">
     <meta name="description" content="">
     <meta name="keywords" content="">
     <meta name="author" content="">
     <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

     <link rel="stylesheet" href="{{asset('landing/css/bootstrap.min.css')}}">
     <link rel="stylesheet" href="{{asset('landing/css/font-awesome.min.css')}}">
     <link rel="stylesheet" href="{{asset('landing/css/aos.css')}}">
     <link rel="stylesheet" href="{{asset('landing/css/owl.carousel.min.css')}}">
     <link rel="stylesheet" href="{{asset('landing/css/owl.theme.default.min.css')}}">

     <!-- MAIN CSS -->
     <link rel="stylesheet" href="{{asset('landing/css/templatemo-digital-trend.css')}}">

</head>
<body>

     <!-- MENU BAR -->
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="#">
              {{-- <i class="fa fa-line-chart"></i>
              Digital Trend --}}
              <img src="{{asset('png/logotext.png')}}" height="100">
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="/" class="nav-link smoothScroll">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link smoothScroll">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a href="#project" class="nav-link smoothScroll">Layanan</a>
                    </li>
                    <li class="nav-item">
                        <a href="#footer" class="nav-link">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{url('login')}}/" class="nav-link contact">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


     <!-- HERO -->
     <section class="hero hero-bg d-flex justify-content-center align-items-center">
               <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                              <div class="hero-text">

                                   <h1 class="text-white" data-aos="fade-up">We are ready for your digital marketing</h1>

                                   <a href="contact.html" class="custom-btn btn-bg btn mt-3" data-aos="fade-up" data-aos-delay="100">Let us discuss together!</a>

                                   <strong class="d-block py-3 pl-5 text-white" data-aos="fade-up" data-aos-delay="200"><i class="fa fa-phone mr-2"></i> +99 080 070 4224</strong>
                              </div>
                        </div>

                        <div class="col-lg-6 col-12">
                          <div class="hero-image" data-aos="fade-up" data-aos-delay="300">

                            <img src="{{asset('png/logo.png')}}" class="img-fluid">
                          </div>
                        </div>

                    </div>
               </div>
     </section>


     <!-- ABOUT -->
     <section class="about section-padding pb-0" id="about">
          <div class="container">
               <div class="row">

                    <div class="col-lg-7 mx-auto col-md-10 col-12">
                         <div class="about-info">

                              <h2 class="mb-4" data-aos="fade-up">Visi <strong>&</strong> Misi</h2>

                              <p class="mb-0" data-aos="fade-up">Visi : <br/> "TERWUJUDNYA KABUPATEN SIDOARJO YANG SEJAHTERA, MAJU, BERKARAKTER DAN BERKELANJUTAN" <br/> <br/> Misi : <br/> 1.  Mewujudkan tata kelola pemerintahan yang bersih, transparan dan tangkas melalui Digitalisasi Untuk Meningkatkan Kualitas Pelayanan Publik dan Kemudahan Berusaha. <br /> 2. Membangkitkan pertumbuhan ekonomi dengan fokus pada kemandirian lokal berbasis usaha mikro, koperasi, pertanian, perikanan, sektor jasa dan industri untuk membuka lapangan pekerjaan dan mengurangi kemiskinan. <br /> 3. Membangun infrastruktur ekonomi dan sosial yang modern dan berkeadilan dengan memperhatikan keberlanjutan lingkungan. <br/> 4. Membangun SDM Unggul dan berkarakter melalui peningkatan akses pelayanan bidang pendidikan, kesehatan serta kebutuhan dasar lainnya. <br/> 5. Mewujudkan Masyarakat Religius yang berpegang teguh pada nilai-nilai keagamaan serta mampu menjaga kerukunan sosial antar warga
                              
                         </div>

                         <div class="about-image" data-aos="fade-up" data-aos-delay="200">

                          <img src="{{asset('landing/images/office.png')}}" class="img-fluid" alt="office">
                        </div>
                    </div>

               </div>
          </div>
     </section>


     <!-- PROJECT -->
     <section class="project section-padding" id="project">
          <div class="container-fluid">
               <div class="row">

                    <div class="col-lg-12 col-12">

                        <h2 class="mb-5 text-center" data-aos="fade-up">
                            Layanan Dinas Koperasi dan Usaha Mikro
                        </h2>

                         <div class="owl-carousel owl-theme" id="project-slide">
                              <div class="item project-wrapper" data-aos="fade-up" data-aos-delay="100">
                                   <img src="{{asset('landing/images/project/project-image01.jpg')}}" class="img-fluid" alt="project image">

                                   <div class="project-info">

                                        <h3>
                                             <a href="project-detail.html">
                                                  <span>Pelayanan Konsultasi Usaha Mikro</span>
                                                  <i class="fa fa-angle-right project-icon"></i>
                                             </a>
                                        </h3>
                                   </div>
                              </div>

                              <div class="item project-wrapper" data-aos="fade-up">
                                   <img src="{{asset('landing/images/project/project-image02.jpg')}}" class="img-fluid" alt="project image">

                                   <div class="project-info">

                                        <h3>
                                             <a href="project-detail.html">
                                                  <span>Pengurus Koperasi</span>
                                                  <i class="fa fa-angle-right project-icon"></i>
                                             </a>
                                        </h3>
                                   </div>
                              </div>

                              <div class="item project-wrapper" data-aos="fade-up">
                                   <img src="{{asset('landing/images/project/project-image03.jpg')}}" class="img-fluid" alt="project image">

                                   <div class="project-info">

                                        <h3>
                                             <a href="project-detail.html">
                                                  <span>Ijin Usaha Simpan Pinjam</span>
                                                  <i class="fa fa-angle-right project-icon"></i>
                                             </a>
                                        </h3>
                                   </div>
                              </div>

                              <div class="item project-wrapper" data-aos="fade-up">
                                   <img src="{{asset('landing/images/project/project-image04.jpg')}}" class="img-fluid" alt="project image">

                                   <div class="project-info">

                                        <h3>
                                             <a href="project-detail.html">
                                                  <span>Nomor Induk Koperasi</span>
                                                  <i class="fa fa-angle-right project-icon"></i>
                                             </a>
                                        </h3>
                                   </div>
                              </div>

                              <div class="item project-wrapper" data-aos="fade-up">
                                   <img src="{{asset('landing/images/project/project-image05.jpg')}}" class="img-fluid" alt="project image">

                                   <div class="project-info">

                                        <h3>
                                             <a href="project-detail.html">
                                                  <span>Pemakaian Stand</span>
                                                  <i class="fa fa-angle-right project-icon"></i>
                                             </a>
                                        </h3>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     </section>


     <!-- TESTIMONIAL -->
     <section class="testimonial section-padding">
          <div class="container">
               <div class="row">

                    <div class="col-lg-6 col-md-5 col-12">
                        <div class="contact-image" data-aos="fade-up">

                          <img src="{{asset('landing/images/female-avatar.png')}}" class="img-fluid" alt="website">
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-7 col-12">
                      <h4 class="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">Sambutan Kadin</h4>

                      <div class="quote" data-aos="fade-up" data-aos-delay="200"></div>

                      <h2 class="mb-4" data-aos="fade-up" data-aos-delay="300">Kami menyusunnya sebagai sajian informasi mengenai komitmen Pemerintah Kota dalam mengusahakan kesejahteraan bagi warganya. Ada beragam aspek yang akan dirangkum dalam website ini seperti tentang Koperasi, Usaha Mikro, serta Sektor informal seperti Pedagang Kaki Lima.</h2>

                      <p data-aos="fade-up" data-aos-delay="400">
                        <strong>Mary Zoe</strong>

                        <span class="mx-1">/</span>

                        <small>Kadin Koperasi dan UKM</small>
                      </p>
                    </div>

               </div>
          </div>
     </section>


    <footer class="site-footer" id="footer">
      <div class="container">
        <div class="row">

          <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
            <h1 class="text-white" data-aos="fade-up" data-aos-delay="100">We make creative <strong>brands</strong> only.</h1>
          </div>

          <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
            <h4 class="my-4">Contact Info</h4>

            <p class="mb-1">
              <i class="fa fa-phone mr-2 footer-icon"></i>
              +99 080 070 4224
            </p>

            <p>
              <a href="#">
                <i class="fa fa-envelope mr-2 footer-icon"></i>
                hello@company.com
              </a>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
            <h4 class="my-4">Our Studio</h4>

            <p class="mb-1">
              <i class="fa fa-home mr-2 footer-icon"></i>
              Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ, Brazil
            </p>
          </div>

          <div class="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up" data-aos-delay="400">
            <p class="copyright-text">Copyright &copy; 2020 Your Company
            <br>
            <a rel="nofollow noopener" href="https://templatemo.com">Design: TemplateMo</a></p>
          </div>

          <div class="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">

            <ul class="footer-link">
              <li><a href="#">Stories</a></li>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
            <ul class="social-icon">
              <li><a href="#" class="fa fa-instagram"></a></li>
              <li><a href="#" class="fa fa-twitter"></a></li>
              <li><a href="#" class="fa fa-dribbble"></a></li>
              <li><a href="#" class="fa fa-behance"></a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>


     <!-- SCRIPTS -->
     <script src="{{ asset('landing/js/jquery.min.js')}}"></script>
     <script src="{{ asset('landing/js/bootstrap.min.js')}}"></script>
     <script src="{{ asset('landing/js/aos.js')}}"></script>
     <script src="{{ asset('landing/js/owl.carousel.min.js')}}"></script>
     <script src="{{ asset('landing/js/smoothscroll.js')}}"></script>
     <script src="{{ asset('landing/js/custom.js')}}"></script>

</body>
</html>
