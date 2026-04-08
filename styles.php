<?php
include 'dbconfig.php';
$file = basename($_SERVER['PHP_SELF']);
$id = isset($_GET['id']) ? $_GET['id'] : '';
if (isset($_GET['id'])) {
    $category = "SELECT * FROM `compentecy_category` WHERE `category_id`='" . $_GET['id'] . "'";
    $catRes = $conn->query($category);
    $row = $catRes->fetch_assoc();
}

// Default values
$title = "TSE | Corporate Competency & Strategic Alliances";
$desc = "Scalable workforce development and professional competency solutions for global enterprises.";
$robots = "index, follow";

switch ($file) {
    case 'about.php':
    case 'about-us.php':
        $title = "About TSE | Professional Growth & Corporate Strategy";
        $desc = "Discover how TSE bridges the industry skill gap with innovative professional development methodologies.";
        break;
    case 'methodologies.php':
        $title = "Performance Optimization Methodologies | TSE";
        $desc = "Explore our proprietary frameworks designed to enhance professional competency and employee performance.";
        break;
    case 'certifications.php':
        $title = "Professional Credentials & Industry Validations | TSE";
        $desc = "Standardize organizational excellence with our specialized certification programs and validated credentials.";
        break;
    case 'pay.php':
        $title = "Secure Payment Portal | TSE";
        $robots = "noindex, nofollow";
        break;
    case 'competency.php':
        // You can add a database lookup here to get the real name of the competency
        $title = "Specialized Competency Training | " . $row['title'] . " | TSE";
        $desc = "Advance your organizational capabilities with TSE's specialized corporate competency frameworks.";
        break;
}
?>

<title>
    <?php echo $title; ?>
</title>
<meta name="description" content="<?php echo $desc; ?>">
<meta name="robots" content="<?php echo $robots; ?>">
<link rel="shortcut icon" type="image/x-icon" href="images/Logo-tse.png" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
<link rel="stylesheet" href="css/owl.carousel.min.css" />
<link rel="stylesheet" href="css/owl.theme.default.min.css" />
<link rel="stylesheet" href="css/style.css" />