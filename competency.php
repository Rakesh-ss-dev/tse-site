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

<body class="bg-dark-blue">
    <?php include('header.php') ?>
    <?php
    $category = "SELECT * FROM `compentecy_category` WHERE `category_id`='" . $_GET['id'] . "'";
    $catRes = $conn->query($category);
    $catRow = $catRes->fetch_assoc();
    ?>
    <main>
        <section class="competency-new-banner position-relative">
            <img src="images/competency-banner.jpg" width="100%" alt="Competency Banner">
            <div class="competency-title">
                <h1 class="h3"><?php echo $catRow['title'] ?></h1>
                <p class="text-white"><?php echo $catRow['caption'] ?></p>
            </div>
        </section>
        <section class="competency-content-section position-relative">
            <div class="competency-content">
                <p><?php echo $catRow['description'] ?></p>
            </div>
        </section>
        <section class="position-relative">
            <div class="competency-content bg-transparent">
                <div class="container">
                    <div class="row text-white">
                        <?php
                        $competency = "SELECT * FROM `Competency` WHERE `category`='" . $catRow['category_id'] . "'";
                        $compRes = $conn->query($competency);
                        $num = $compRes->num_rows;
                        while ($compRow = $compRes->fetch_assoc()) { ?>
                            <div class="col-md-4 my-10">
                                <a class="text-white text-decoration-none" href="#" data-target="sql-server">
                                    <small><?php echo $compRow['title'] ?></small></a>
                            </div>
                        <?php }
                        ?>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <button class="reach-us-btn" type="button" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Reach our team for more info</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-sm">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <form id="requestForm" action="">
                                        <div class="mb-3">
                                            <input class="form-control" id="name" name="Name" required type="text"
                                                placeholder="Name" aria-label="">
                                        </div>
                                        <div class="mb-3">
                                            <input class="form-control" id="email" name="Email" required type="email"
                                                placeholder="Email" aria-label="">
                                        </div>
                                        <div class="mb-3">
                                            <input class="form-control" id="phone" name="Phone" required type="text"
                                                placeholder="Phone" aria-label="">
                                        </div>
                                        <div class="mb-3">
                                            <input class="form-control" id="organization" name="Organization" required
                                                type="text" placeholder="Organization" aria-label="">
                                        </div>
                                        <div class="mb-3">
                                            <textarea class="form-control" id="message" name="Message" required rows="3"
                                                aria-label="" placeholder="Message"></textarea>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button type="submit" class="btn btn-primary">Request a call back</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-5">
            <div class="competency-content bg-transparent p-0">
                <div class="row m-0">
                    <?php if ($catRow['title'] !== 'Generative & Agentic AI') { ?>
                        <div class="col-md-4 p-4">
                            <a class="text-decoration-none" href="competency.php?id=11">
                                <div class="competency-box">
                                    <h5>Generative & Agentic AI</h5>
                                    <p><small>Train. Manage. Optimize. Scale.</small></p>
                                    <div class="competency-icons my-30 d-none d-md-flex">
                                        <div class="comptency-arrow-container">
                                            <img class="competency-arrow" src="images/competency-arrow.svg" width="25"
                                                alt="">
                                            <img class="competency-arrow-white" src="images/competency-arrow-white.svg"
                                                width="25" alt="">
                                        </div>
                                        <div class="compentency-icon-container">
                                            <img class="competency-icon" src="images/genaiicon.svg" height="100px" alt="">
                                            <img class="competency-icon-white" src="images/genaiiconwht.svg" height="100px"
                                                alt="">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    <?php }
                    if ($catRow['title'] !== 'Cloud Computing') { ?>
                        <div class="col-md-4 p-4">
                            <a class="text-decoration-none" href="competency.php?id=4">
                                <div class="competency-box">
                                    <h5>Cloud Computing</h5>
                                    <p><small>Learn. Deploy. Scale. Excel</small></p>
                                    <div class="competency-icons my-30 d-none d-md-flex">
                                        <div class="comptency-arrow-container">
                                            <img class="competency-arrow" src="images/competency-arrow.svg" width="25"
                                                alt="">
                                            <img class="competency-arrow-white" src="images/competency-arrow-white.svg"
                                                width="25" alt="">
                                        </div>
                                        <div class="compentency-icon-container">
                                            <img class="competency-icon" src="images/cloud-blue.svg" height="100px" alt="">
                                            <img class="competency-icon-white" src="images/cloud-white.svg" height="100px"
                                                alt="">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    <?php }
                    if ($catRow['title'] !== 'Data Science & Analytics') { ?>
                        <div class="col-md-4 p-4">
                            <a class="text-decoration-none" href="competency.php?id=6">
                                <div class="competency-box">
                                    <h5>Data Science & Analytics</h5>
                                    <p><small>Code. Build. Solve. Grow</small></p>
                                    <div class="competency-icons my-30 d-none d-md-flex">
                                        <div class="comptency-arrow-container">
                                            <img class="competency-arrow" src="images/competency-arrow.svg" width="25"
                                                alt="">
                                            <img class="competency-arrow-white" src="images/competency-arrow-white.svg"
                                                width="25" alt="">
                                        </div>
                                        <div class="compentency-icon-container">
                                            <img class="competency-icon" src="images/datascienceiconblu.svg" height="100px"
                                                alt="">
                                            <img class="competency-icon-white" src="images/datascienceiconwht.svg"
                                                height="100px" alt="">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <?php }
                    if ($catRow['title'] !== 'Programming') { ?>
                        <div class="col-md-4 p-4">
                            <a class="text-decoration-none" href="competency.php?id=18">
                                <div class="competency-box">
                                    <h5>Programming</h5>
                                    <p><small>Code. Build. Solve. Grow</small></p>
                                    <div class="competency-icons my-30 d-none d-md-flex">
                                        <div class="comptency-arrow-container">
                                            <img class="competency-arrow" src="images/competency-arrow.svg" width="25"
                                                alt="">
                                            <img class="competency-arrow-white" src="images/competency-arrow-white.svg"
                                                width="25" alt="">
                                        </div>
                                        <div class="compentency-icon-container">
                                            <img class="competency-icon" src="images/programingiconblu.svg" height="100px"
                                                alt="">
                                            <img class="competency-icon-white" src="images/programingiconwht.svg"
                                                height="100px" alt="">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <?php }
                    if ($catRow['title'] !== 'Databases') { ?>
                        <div class="col-md-4 p-4">
                            <a class="text-decoration-none" href="competency.php?id=8">
                                <div class="competency-box">
                                    <h5>Databases</h5>
                                    <p><small>Train. Manage. Optimize. Scale.</small></p>
                                    <div class="competency-icons my-30 d-none d-md-flex">
                                        <div class="comptency-arrow-container">
                                            <img class="competency-arrow" src="images/competency-arrow.svg" width="25"
                                                alt="">
                                            <img class="competency-arrow-white" src="images/competency-arrow-white.svg"
                                                width="25" alt="">
                                        </div>
                                        <div class="compentency-icon-container">
                                            <img class="competency-icon" src="images/databaseiconblu.svg" height="100px"
                                                alt="">
                                            <img class="competency-icon-white" src="images/databaseiconwht.svg"
                                                height="100px" alt="">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    <?php }
                    if ($catRow['title'] !== 'Frontend UI Development') { ?>
                        <div class="col-md-4 p-4">
                            <a class="text-decoration-none" href="competency.php?id=10">
                                <div class="competency-box">
                                    <h5>Frontend UI Development</h5>
                                    <p><small>Design. Build. Polish. Launch.</small></p>
                                    <div class="competency-icons my-30 d-none d-md-flex">
                                        <div class="comptency-arrow-container">
                                            <img class="competency-arrow" src="images/competency-arrow.svg" width="25"
                                                alt="">
                                            <img class="competency-arrow-white" src="images/competency-arrow-white.svg"
                                                width="25" alt="">
                                        </div>
                                        <div class="compentency-icon-container">
                                            <img class="competency-icon" src="images/cybericonblu.svg" height="100px"
                                                alt="">
                                            <img class="competency-icon-white" src="images/cybericonwht.svg" height="100px"
                                                alt="">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    <?php }
                    if ($catRow['title'] !== 'Network & OS') { ?>
                        <div class="col-md-4 p-4">
                            <a class="text-decoration-none" href="competency.php?id=16">
                                <div class="competency-box">
                                    <h5>Network & OS</h5>
                                    <p><small>Code. Build. Solve. Grow</small></p>
                                    <div class="competency-icons my-30 d-none d-md-flex">
                                        <div class="comptency-arrow-container ">
                                            <img class="competency-arrow" src="images/competency-arrow.svg" width="25"
                                                alt="">
                                            <img class="competency-arrow-white" src="images/competency-arrow-white.svg"
                                                width="25" alt="">
                                        </div>
                                        <div class="compentency-icon-container">
                                            <img class="competency-icon" src="images/operatingsystemsiconblu.svg"
                                                height="100px" alt="">
                                            <img class="competency-icon-white" src="images/operatingsystemsiconwht.svg"
                                                height="100px" alt="">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    <?php } ?>
                </div>
        </section>
    </main>
    <?php include('footer.php') ?>
    <!-- Bootstrap JavaScript Libraries -->
    <?php include('scripts.php') ?>
    <script>
        $('#requestForm').submit(function (e) {
            e.preventDefault();
            const url = `https://wa.me/919391133223?text=Name%3A%20${$('#name').val()}%0AEmail%3A%20${$('#email').val()}%0APhone%3A%20${$('#phone').val()}%0AOrganization%3A%20${$('#organization').val()}%0AMessage%3A%20${$('#message').val()}%0ACompetency%3A%20<?php echo $catRow['title'] ?>`;
            this.reset();
            const myModalEl = document.getElementById('exampleModal');
            const modal = bootstrap.Modal.getInstance(myModalEl);
            modal.hide();
            window.open(url, '_blank');
        })
    </script>
</body>

</html>