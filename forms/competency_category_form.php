<!DOCTYPE html>
<html lang="en">
<?php 
include 'ajax/dbconfig.php';
$sql="SELECT * FROM `compentecy_category` WHERE `category_id`='".$_GET['id']."'";
$res=$conn->query($sql);
$row=$res->fetch_assoc();
?>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>
        Create Competency Category
    </title>
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
                <div class="ms-3">
                    <h3 class="mb-4 h4 font-weight-bolder">Comptency Category</h3>
                </div>
                <div class="container">
                    <div class="row w-100 h-100 d-flex align-items-center justify-content-center">
                        <div class="col-md-8 mx-auto">
                            <div class="card shadow p-5">
                                <h3></h3>
                                <form id="competency-category" action="">
                                    <div class="input-group input-group-dynamic mb-3">
                                        <input class="form-control" id="title" type="text" name="title" required placeholder="Title"
                                        <?php if(isset($_GET['id'])){?> value='<?php echo $row['title'] ?>'<?php }?>
                                            aria-label="Title">
                                    </div>
                                    <?php if(isset($_GET['id'])){?>
                                        <input type="hidden" name="id" value="<?php echo $_GET['id'] ?>">
                                    <?php } ?>
                                    <div class="input-group input-group-dynamic mb-3">
                                        <input class="form-control" id="caption" type="text" name="caption" required placeholder="Caption"
                                        <?php if(isset($_GET['id'])){?> value='<?php echo $row['caption'] ?>'<?php }?>
                                            aria-label="Caption">
                                    </div>
                                    <div class="mb-4">
                                        <label for="exampleFormControlSelect1" class="ms-0">Description</label>
                                        <div id="editor">
                                            <?php if (isset($_GET['id'])) {
                                                echo $row['description'];
                                            } ?>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
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
    <script src="assets/js/plugins/chartjs.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js"></script>
    <script src="assets/js/material-dashboard.min.js?v=3.2.0"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script>
        var quill = new Quill('#editor', {
            theme: 'snow' // Specify theme in configuration
        });
        $('#competency-category').submit(function (e) {
            e.preventDefault();
            let content = quill.getSemanticHTML();
            let cleanedString = content.replace(/&nbsp;/g, ' ')
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")
                .replace(/&#x2F;/g, '/');
            const data = $(this).serialize();
            const input = data + '&description=' + cleanedString;
            $.ajax({
                url: "ajax/competency-category.php",
                data: input,
                method: 'Post',
                success: function (res) {
                    alert(res);
                    location.href='competency_category.php'
                },
                error: function (err) {
                    console.log(err);
                }
            })
        })
    </script>
</body>

</html>