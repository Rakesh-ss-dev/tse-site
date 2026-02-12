<?php require 'db.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Select Course</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .course-card { transition: transform 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .course-card:hover { transform: translateY(-5px); }
        .price-tag { font-size: 1.5rem; color: #28a745; font-weight: bold; }
    </style>
</head>
<body class="bg-light">

<div class="container py-5">
    <h1 class="text-center mb-5">Available Courses</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        
        <?php
        $sql = "SELECT * FROM courses";
        $result = $conn->query($sql);

        if ($result->num_rows > 0):
            while($row = $result->fetch_assoc()):
        ?>
            <div class="col">
                <div class="card h-100 course-card">
                    <div class="card-body text-center">
                        <h5 class="card-title"><?php echo htmlspecialchars($row['title']); ?></h5>
                        <p class="card-text text-muted"><?php echo htmlspecialchars($row['description']); ?></p>
                        <p class="price-tag">₹<?php echo $row['price']; ?></p>
                        
                        <form action="pay.php" method="POST">
                            <input type="hidden" name="course_id" value="<?php echo $row['id']; ?>">
                            <button type="submit" class="btn btn-primary w-100">Buy Now</button>
                        </form>
                    </div>
                </div>
            </div>
        <?php 
            endwhile;
        else:
            echo "<p class='text-center'>No courses found.</p>";
        endif; 
        ?>

    </div>
</div>
</body>
</html>