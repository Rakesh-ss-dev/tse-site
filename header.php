<?php include 'dbconfig.php' ?>
<header>
  <nav id="header" class="navbar navbar-expand-sm navbar-dark">
    <div class="container col-md-10 col-11">
      <a class="navbar-brand" href="/">
        <img id="logo" src="images/logo.svg" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu"
        aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav-menu">
        <div class="ms-auto mt-2 mt-lg-0 d-flex flex-column">
          <ul id="tse-nav" class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="about-us.php">ABOUT US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="methodologies.php">METHODOLOGIES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="academic_alliance.php">ACADEMIC ALLIANCE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="contact.php">CONTACT US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="certifications.php">CERTIFICATIONS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>
<section class="sticky-top">
  <div class="course-slider bg-light-blue">
    <div id="home-course-slider" class="d-flex justify-content-between">
      <?php $relevent = [11, 4, 6, 18, 8, 10, 16];
      $ids = implode(',', $relevent);
      $sql = "SELECT * FROM compentecy_category WHERE category_id IN ($ids) ORDER BY FIELD(category_id, $ids)";
      $result = mysqli_query($conn, $sql);
      while ($row = mysqli_fetch_assoc($result)) { ?>
        <div class="item px-3 mb-0">
          <a href="competency.php?id=<?php echo $row['category_id'] ?>"
            class="text-center text-decoration-none m-0 text-nowrap"><?php echo $row['title'] ?></a>
        </div>
      <?php }
      ?>
      <div class="item mb-0 bg-dark-blue px-3">
        <div class="dropdown">
          <a href="#" id="more-btn" class="text-center text-decoration-none m-0 dropdown-toggle text-nowrap" data-bs-toggle="dropdown"
            aria-expanded="false">More <i class="fa-solid fa-plus"></i></a>
          <div class="dropdown-menu bg-dark-blue  mega-menu">
            <div class="row">
              <?php $more = "SELECT * FROM compentecy_category WHERE category_id NOT IN ($ids)";
              $moreRes = $conn->query($more);
              while ($moreRow = $moreRes->fetch_assoc()) { ?>
                <div class="col-md-5 mx-auto py-1">
                  <a class="dropdown-item text-wrap"
                    href="competency.php?id=<?php echo $moreRow['category_id'] ?>"><?php echo $moreRow['title'] ?></a>
                </div>
              <?php }
              ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<?php include('floating-icon.php') ?>