<!DOCTYPE html>
<html lang="en">

<head>
    <title>The Skill Enhancers</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <?php include('styles.php') ?>
</head>

<body class="bg-dark-blue overflow-x-hidden">
    <?php include('header.php') ?>
    <main>
        <section class="py-75 bg-contact-dark">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-10 mx-auto">
                        <h1 class="text-white">Let's Connect</h1>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-10 mx-auto col-md-6 py-75">
                        <div class="d-flex flex-column gap-2 justify-content-between">
                            <div>
                                <img src="images/address_icon.svg" class="mb-2" width="30" alt="">
                                <h5 class="text-white">Address:</h5>
                                <p class="text-white">The Skill Enhancers,<br> Raghuma Towers Hitech City Rd,<br> Phase
                                    2, Kavuri Hills, Madhapur,<br> Hyderabad, Telangana 500081</p>
                            </div>
                            <div>
                                <img src="images/call_icon.svg" class="mb-2" width="30" alt="">
                                <h5 class="text-white">Phone:</h5>
                                <p class="text-white">040-40203358, 040-40273355</p>
                            </div>
                            <div>
                                <img src="images/email_icon.svg" class="mb-2" width="30" alt="">
                                <h5 class="text-white">Send us a Message:</h5>
                                <p class="text-white">info@tseedu.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-10 mx-auto"><img src="images/tse-contact.png" width="100%" alt=""></div>
                </div>
            </div>
        </section>
        <section class="tse-tabs-section">
            <div class="row">
                <div class="col-md-6 col-10 mx-auto map-section p-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4077854541642!2d78.39075747369061!3d17.440185801284866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e056fb5f85%3A0x3e52ba90a1af6b7b!2sThe%20Skill%20Enhancers%20(TSE)!5e0!3m2!1sen!2sin!4v1740807948015!5m2!1sen!2sin"
                        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6 col-10 mx-auto my-auto p-0">
                    <div class="row m-0">
                        <div class="col-md-8 col-11 py-3 mx-auto">
                            <form onsubmit="sendToWhatsApp(event)">
                                <h5 class="text-white mb-4">Send us Message</h5>
                                <div class="mb-3">
                                    <input type="text" name="name" placeholder="Full Name" class="form-control"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <input type="email" name="email" class="form-control" placeholder="Email Id"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <input type="tel" name="mobile" class="form-control" placeholder="Mobile Number"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <textarea name="message" class="form-control" placeholder="Message" id=""
                                        required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="footer py-75">
        <div class="row">
            <div class="col-md-4 mx-auto">
                <div class="d-flex justify-content-around">
                    <a href="https://www.facebook.com/tseedu/?ref=py_c" target="_blank"><img
                            src="images/facebook-icon.svg" width="40" alt="" /></a>
                    <a href="https://twitter.com/tseedu?lang=en" target="_blank"><img src="images/x-icon.svg" width="40"
                            alt="" /></a>
                    <a href="https://www.linkedin.com/company/tseedu/" target="_blank"><img
                            src="images/linkedin-icon.svg" width="40" alt="" /></a>
                    <a href="https://wa.link/bax02e" target="_blank"><img src="images/whatsapp-icon.svg" width="40"
                            alt="" /></a>
                </div>
                <p class="text-white text-center mt-3 mb-0">Tseedu | &copy 2021 Powered by TSE, All rights reserved</p>
            </div>
        </div>
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <?php include('scripts.php') ?>
    <script>
        function sendToWhatsApp(event) {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const phone = form.mobile.value;
            const message = form.message.value;
            const whatsappURL = `https://api.whatsapp.com/send?phone=919391133223&text=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        }
    </script>
</body>

</html>