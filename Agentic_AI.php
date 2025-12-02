<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agentic AI</title>
    <link rel="shortcut icon" type="image/x-icon" href="images/Logo-tse.png" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css" />
    <style>
        .text-absolute {
            right: 45%;
        }
    </style>
</head>

<body class="bg-dark-blue">
    <?php include('floating-icon.php') ?>
    <nav class="navbar navbar-expand-lg navbar-dark bg-black4">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img id="logo" src="images/logo.svg" alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-white active" aria-current="page"
                            href="#Prerequisites">Prerequisites</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white active" aria-current="page" href="#Topics">Topics</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white active" href="" data-bs-toggle="modal"
                            data-bs-target="#reachUs">Reach us </a>
                        <div class="modal fade" id="reachUs" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="reachUsLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content bg-dark-blue">
                                    <form onsubmit="sendToWhatsApp(event)" action="">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5 text-white" id="reachUsLabel">Reach
                                                Us</h1>
                                            <button type="button" class="btn-close text-white" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="mb-3">
                                                <input type="text" name="name" id="name" placeholder="Full Name"
                                                    class="form-control" required>
                                            </div>
                                            <div class="mb-3">
                                                <input type="email" name="email" id="email" placeholder="Email Id"
                                                    class="form-control" required>
                                            </div>
                                            <div class="mb-3">
                                                <input type="tel" name="mobile" id="mobile"
                                                    placeholder="Mobile/Whatsapp Number" required class="form-control">
                                            </div>
                                            <div class="mb-3">
                                                <textarea class="form-control" name="message" placeholder="Message"
                                                    rows="4" required></textarea>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="py-5 bg-black4">
        <div class="row m-0">
            <div class="col-11 mx-auto col-md-12">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mx-auto">
                            <img src="images/AgenticAi.jpg" width="100%" alt="">
                        </div>
                        <div class="col-md-6 ms-auto my-auto">
                            <img src="images/GenAIBanner2.svg" width="100%" alt="">
                            <h5 class="text-white mt-3">To drive corporate innovation and empower workforce with
                                tomorrow's
                                skills TODAY</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <section id="Prerequisites" class="my-5">
        <div class="row m-0">
            <div class="col-11 mx-auto col-md-12">
                <div class="container">
                    <div class="row align-items-end">
                        <div class="col-md-6 d-flex flex-column">
                            <div class="position-relative">
                                <img class="mx-auto" src="images/genaiinsoftwaretesting.jpg" width="70%" alt="">
                                <h3 class="text-white text-absolute">Agentic AI</h3>
                            </div>
                            <p class="text-white">Agentic AI is revolutionizing automation, enabling AI systems to
                                think, plan, and act autonomously. Imagine building AI agents that can make decisions,
                                adapt to changing environments, and execute complex tasks - all without constant human
                                intervention. This course makes cutting-edge Agentic AI accessible, breaking down
                                concepts into practical, hands-on applications - no complicated jargon, just real-world
                                solutions.
                            </p>
                            <p class="text-white">Industries are already leveraging AI agents to optimize workflows,
                                enhance
                                decision-making, and drive innovation. Will you embrace this future or be left behind?
                                Now is the time to upskill and master Agentic AI! Join this course and learn to build
                                intelligent, autonomous AI systems - because the future isn't waiting!</p>
                        </div>
                        <div class="col-md-5 ms-auto">
                            <div class="prerequisites">
                                <h3 class="text-light-blue mb-4">Prerequisites</h3>
                                <div class="preq-div">
                                    <p class="text-white">Successful completion of <strong>"Generative AI and Prompt
                                            Engineering"</strong>
                                        or <strong>" LLMs Leveraging Native OCI Services"</strong></p>
                                </div>
                                <div class="preq-div">
                                    <p class="text-white">Intermedial level knowledge of Python</p>
                                </div>
                                <div class="preq-div">
                                    <p class="text-white">Familiarity with machine learning concepts</p>
                                </div>
                                <div class="preq-div">
                                    <p class="text-white">A keen interest in AI and its applications</p>
                                </div>
                            </div>
                            <div class="whoIsThisFor">
                                <h3 class="text-light-blue mb-4">Who is this course for ?</h3>
                                <div class="preq-div">
                                    <p class="text-white">Aspiring AI developers and data scientists</p>
                                </div>
                                <div class="preq-div">
                                    <p class="text-white">Software engineers interested in AI/ML</p>
                                </div>
                                <div class="preq-div">
                                    <p class="text-white">Technology enthusiasts with a passion for AI.</p>
                                </div>
                                <div class="preq-div">
                                    <p class="text-white">Professionals looking to upskill in advanced AI development
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- <section id="WhoIsThisCourseFor" class="my-5">
        <div class="row m-0">
            <div class="col-11 mx-auto col-md-12">
                <div class="container">
                    <h2 class="text-white mb-4"></h2>
                    <div class="d-flex gap-5 flex-wrap">
                        <div class="tse-card-new mx-auto mx-md-0">
                            <h4 class="text-light-blue">AI Enthusiasts</h4>
                            <p class="text-white">Individuals passionate about artificial intelligence, looking to delve
                                deeper
                                into generative AI
                                to expand their knowledge and skill set.</p>
                        </div>
                        <div class="tse-card-new mx-auto mx-md-0">
                            <h4 class="text-light-blue">Software Developers</h4>
                            <p class="text-white">Individuals passionate about artificial intelligence, looking to delve
                                deeper
                                into generative AI
                                to expand their knowledge and skill set.</p>
                        </div>
                        <div class="tse-card-new mx-auto mx-md-0">
                            <h4 class="text-light-blue">Software Testers</h4>
                            <p class="text-white">Individuals passionate about artificial intelligence, looking to delve
                                deeper
                                into generative AI
                                to expand their knowledge and skill set.</p>
                        </div>
                        <div class="tse-card-new mx-auto mx-md-0">
                            <h4 class="text-light-blue">Test Engineers</h4>
                            <p class="text-white">Individuals passionate about artificial intelligence, looking to delve
                                deeper
                                into generative AI
                                to expand their knowledge and skill set.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section> -->
    <section class="my-5">
        <div class="d-flex flex-column align-items-center mx-auto mx-md-0 mt-4 w-100">
            <h2 class="text-white bg-light-blue p-2">Talk to our technical team for the best advice now</h2>
            <div class="d-flex justify-content-between mt-3 gap-3">
                <a href="tel:+91 93911 33223"
                    class="text-decoration-none text-white m-0 d-flex align-items-center gap-2"><img
                        src="images/mobileicon.svg" alt="Mobile Icon"> 91 93911 33223</a>
                <a href="mailto:info@tseedu.com"
                    class="text-decoration-none text-white m-0 d-flex align-items-center gap-2"><img
                        src="images/emailicon.svg" alt="Email Icon"> info@tseedu.com</a>
            </div>
        </div>
    </section>
    <section id="EmbraceTheFutureWithAgenticAI" class="my-5">
        <div class="row m-0">
            <div class="col-11 mx-auto col-md-12">
                <div class="container bg-white-opace p-3">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-7 mx-auto">
                                    <img src="images/fundamentals.png" width="100%" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 my-auto">
                            <h2 class="text-white">Embrace the Future with Agentic AI</h2>
                            <p class="text-white">AI is no longer just a tool - it's becoming an independent thinker.
                                Agentic AI is the next frontier, enabling systems to reason, adapt, and act
                                autonomously. This transformation is reshaping industries, and those who stay ahead will
                                define the future. At The Skill Enhancers (TSE), we equip you with the expertise to
                                harness this revolution. Don't just keep up - lead the way!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="Topics" class="my-5">
        <div class="row m-0">
            <div class="col-11 mx-auto col-md-12">
                <div class="container">
                    <h2 class="text-white mb-4">Topics</h2>
                    <div class="position-relative">
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="text-white list-unstyled">
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 1 :</span>
                                        A Study of Generative AI</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 2 :</span>
                                        The Rise of Agentic AI</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 3 :</span>
                                        Coding Essentials for AI Agents</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 4 :</span>
                                        Essentials of Prompt Engineering</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 5 :</span>
                                        LangChain for Expanding Agentic AI Capabilities</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 6 :</span>
                                        Vital Components of RAG Systems</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 7 :</span>
                                        Building AI Agents</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 8 :</span>
                                        Building An AI Agent from Scratch</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 9 :</span>
                                        Developing React Agents using LangChain</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 10:</span>
                                        Hand on Labs - Building Agentic RAG with Llamaindex</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="text-white list-unstyled">
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 11
                                            :</span>
                                        Building AI Agent with LangGraph</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 12
                                            :</span>
                                        Building Advanced AI Agents with LangGraph</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 13
                                            :</span>
                                        Advanced RAG Systems using LangGraph</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 14
                                            :</span>
                                        Building AI Agent with Autogen</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 15
                                            :</span>
                                        Building Advanced AI Agents with AutoGen</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 16
                                            :</span>
                                        Hand on Labs - AI Agentic Design Patterns with AutoGen</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 17
                                            :</span>
                                        OCI Generative AI Agents Services</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 18
                                            :</span>
                                        Building AI Agent with CrewAI</li>
                                    <li class="py-3 border-bottom-opace"><span class="text-light-blue">Module 19
                                            :</span>
                                        Building Advanced AI Agents with CrewAI</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="my-5">
        <div class="d-flex flex-column align-items-center mx-auto mx-md-0 mt-4 w-100">
            <h2 class="text-white bg-light-blue p-2">Talk to our technical team for the best advice now</h2>
            <div class="d-flex justify-content-between mt-3 gap-3">
                <a href="tel:+91 93911 33223"
                    class="text-decoration-none text-white m-0 d-flex align-items-center gap-2"><img
                        src="images/mobileicon.svg" alt="Mobile Icon"> 91 93911 33223</a>
                <a href="mailto:info@tseedu.com"
                    class="text-decoration-none text-white m-0 d-flex align-items-center gap-2"><img
                        src="images/emailicon.svg" alt="Email Icon"> info@tseedu.com</a>
            </div>
        </div>
    </section>
    <section class="my-5">
        <div class="row m-0">
            <div class="col-11 mx-auto col-md-12">
                <div class="container">
                    <h2 class="text-white mb-4">Related Courses</h2>
                    <div class="row align-items-stretch d-flex">
                        <div class="col-md-4 mb-3">
                            <a href="generative_AI.php" class="text-decoration-none">
                                <div class="card bg-white-opace p-5 px-4">
                                    <h4 class="text-light-blue">Generative AI for Software Testing</h4>
                                    <p class="text-white">Use AI to automate test case generation, bug detection, and
                                        QA.
                                        Perfect for QA engineers and developers.</p>
                                    <a href="generative_AI.php" class="text-light-blue text-decoration-none">More Info
                                        >></a>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 mb-3">
                            <a href="LLM.php" class="text-decoration-none">
                                <div class="card bg-white-opace p-5 px-4">
                                    <h4 class="text-light-blue">Building a Large Language
                                        Model From Scratch</h4>
                                    <p class="text-white">Learn to design, fine-tune, and deploy LLMs for
                                        real-world applications. Perfect for AI developers and NLP enthusiasts. </p>
                                    <a href="LLM.php" class="text-light-blue text-decoration-none">More Info >></a>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 mb-3">
                            <a href="Prompt_Engineering.php" class="text-decoration-none">
                                <div class="card bg-white-opace p-5 px-4">
                                    <h4 class="text-light-blue">Generative AI and Prompt
                                        Engineering</h4>
                                    <p class="text-white">Master prompt design, LLM fine-tuning, and AI-driven content
                                        creation. Ideal for developers and data scientists.
                                    </p>
                                    <a href="Prompt_Engineering.php" class="text-light-blue text-decoration-none">More
                                        Info
                                        >></a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="bg-dark-1">
        <div class="row m-0">
            <div class="col-11 mx-auto col-md-12">
                <div class="container py-4">
                    <div
                        class="d-flex justify-content-between align-items-start align-items-md-center flex-md-row flex-column gap-3 gap-md-0">
                        <div><img src="images/logo.svg" width="50px" alt=""></div>
                        <div>
                            <ul class="text-white list-unstyled d-flex flex-md-row flex-column gap-3 m-0">
                                <li>
                                    <a class="text-white text-decoration-none" href="#Prerequisites">Prerequisites</a>
                                </li>
                                <li>
                                    <a class="text-white text-decoration-none" href="#Topics">Topics</a>
                                </li>
                                <li>
                                    <a class="text-white text-decoration-none" href="" data-bs-toggle="modal"
                                        data-bs-target="#reachUs">Reach us </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
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