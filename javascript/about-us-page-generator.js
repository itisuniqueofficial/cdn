<script>
  function generateAboutPage() {
    // Fetch user inputs
    var websiteName = document.getElementById('websiteName').value.trim();
    var websiteCategory = document.getElementById('websiteCategory').value.trim();
    var websiteURL = document.getElementById('websiteURL').value.trim();
    var email = document.getElementById('email').value.trim();

    // Validate inputs
    if (!websiteName || !websiteURL || !email) {
      alert('Please fill out all fields.');
      return;
    }

    // Generate HTML code for contact section
    var htmlCode = `<p>Welcome to <strong>${websiteName}</strong>!</p>

<p>At <strong>${websiteName}</strong>, we are passionate about ${websiteCategory}. Our mission is to provide high-quality ${websiteCategory} content resources to help you enhance your skills and knowledge in the ever-evolving field of knowledge.</p>

<p><strong>What We Offer:</strong> I offer content focused on the topics of ${websiteCategory}. Our about us page is generated with the help of <a href="https://tinyurl.com/about-us-page-generator" style="color: #fcb600";>About Us Page Generator</a></p>

<p><strong>Our Vision:</strong> Our vision is to provide excellent, informative content on the mentioned topics. We aim to deliver high-quality, engaging, and ${websiteCategory} material that keeps our audience well-informed and up-to-date. Our commitment is to ensure that each piece of content we produce meets the highest standards of accuracy and relevance, making us a trusted source for information on ${websiteCategory}.</p>

<p><strong>Join Us:</strong> Explore our website at <a href="${websiteURL}">${websiteURL}</a> to discover a world of ${websiteCategory} resources tutorials. Whether you are a beginner or an experienced coder, we have something for everyone.</p>

<p><strong>Get In Touch:</strong> We love to hear from our community! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us at <a href="mailto:${email}">${email}</a>.</p>

<p>Thank you for visiting <strong>${websiteName}</strong>. Let's embark on this learning journey together!</p>`;

    // Display generated HTML code
    document.getElementById('htmlCode').value = htmlCode;
    document.getElementById('generatedCode').classList.remove('hidden');
  }

  function copyGeneratedCode() {
    // Copy generated HTML code to clipboard
    var htmlCode = document.getElementById('htmlCode');
    htmlCode.select();
    htmlCode.setSelectionRange(0, 99999); /* For mobile devices */

    document.execCommand('copy');
    alert('Copied the HTML code!');
  }
</script>
