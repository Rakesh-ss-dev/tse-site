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