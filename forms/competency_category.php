<!DOCTYPE html>
<html lang="en">
<?php include 'ajax/dbconfig.php' ?>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>
        Competency Category List
    </title>
    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css"
        href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,900" />
    <!-- Nucleo Icons -->
    <link href="assets/css/nucleo-icons.css" rel="stylesheet" />
    <link href="assets/css/nucleo-svg.css" rel="stylesheet" />
    <!-- Font Awesome Icons -->
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
    <!-- Material Icons -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
    <!-- CSS Files -->
    <link id="pagestyle" href="assets/css/material-dashboard.min.css?v=3.2.0" rel="stylesheet" />
    <link rel="stylesheet" href="../css/style.css">

</head>

<body class="g-sidenav-show  bg-gray-100">
    <?php include 'sidebar.php' ?>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <!-- Navbar -->
        <?php include 'header.php' ?>
        <!-- End Navbar -->
        <div class="container-fluid py-2">
            <div class="row">
                <div class="col-12">
                    <div class="card my-4">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div
                                class="bg-gradient-dark d-flex align-items-center justify-content-between shadow-dark border-radius-lg pt-4 px-3 pb-3">
                                <h6 class="text-white text-capitalize ps-3">Competency Category List</h6>
                                <a href="competency_category_form.php" class="btn btn-primary">Create Category</a>
                            </div>
                        </div>
                        <div class="card-body px-0 pb-2">
                            <div class="table-responsive p-0">
                                <table id="datatable-basic" class="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th
                                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Title</th>
                                            <th
                                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                Caption</th>
                                            <th
                                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Description</th>
                                            <th class="text-secondary opacity-7"></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <?php
                                        $sql = 'SELECT * FROM `compentecy_category`';
                                        $res = $conn->query($sql);
                                        while ($row = $res->fetch_assoc()) {
                                            ?>
                                            <tr>
                                                <td>
                                                    <div class="d-flex px-2 py-1">
                                                        <div class="d-flex flex-column justify-content-center">
                                                            <p class="text-xs text-secondary mb-0">
                                                                <?php echo $row['title'] ?></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p class="text-xs text-secondary mb-0"><?php echo $row['caption'] ?></p>
                                                </td>
                                                <td class="align-middle text-xxs text-wrap">
                                                    <?php echo $row['description'] ?>
                                                </td>
                                                <td class="align-middle">
                                                    <a href="competency_category_form.php?id=<?php echo $row['category_id'] ?>"
                                                        class="text-secondary font-weight-bold text-xs"
                                                        data-toggle="tooltip" data-original-title="Edit user">
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                        <?php }
                                        ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!--   Core JS Files   -->
    <script src="assets/js/core/popper.min.js"></script>
    <script src="assets/js/core/bootstrap.min.js"></script>
    <script src="assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="assets/js/plugins/smooth-scrollbar.min.js"></script>
    <script src="assets/js/material-dashboard.min.js?v=3.2.0"></script>
    <script src="assets/js/plugins/datatables.js"></script>
    <script type="text/javascript">
        const dataTableBasic = new simpleDatatables.DataTable("#datatable-basic", {
            fixedHeight: true
        });
    </script>
</body>

</html>