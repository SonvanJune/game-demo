<script>
    let message = "日本の皆さん、こんにちは。！";
  </script>
  
  <style>
    /* Phần nền chính */
    main {
      text-align: center;
      padding: 50px;
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #87CEEB, #FFB6C1);  /* Màu xanh dương và hồng nhạt */
      animation: fadeIn 2s ease-out;
    }
  
    /* Tiêu đề */
    h1 {
      color: #2E3B4E; /* Màu chữ đậm dễ đọc */
      font-size: 3.5rem;
      font-weight: bold;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
      animation: slideIn 1s ease-out;
    }
  
    /* Đoạn văn */
    p {
      font-size: 1.6rem;
      color: #2E3B4E;
      opacity: 0;
      animation: fadeInText 2s 1.2s forwards;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    }
  
    /* Container */
    .container {
      background-color: rgba(255, 255, 255, 0.9); /* Nền trắng mờ */
      border-radius: 15px;
      padding: 40px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      max-width: 700px;
      margin: auto;
      opacity: 0;
      animation: fadeInContainer 2s ease-out forwards;
      transform: scale(0.95);
      animation: fadeInContainer 2s ease-out forwards, scaleUp 0.8s 1.5s ease-out;
    }
  
    /* Các hiệu ứng animation */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  
    @keyframes slideIn {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  
    @keyframes fadeInText {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  
    @keyframes fadeInContainer {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  
    @keyframes scaleUp {
      from {
        transform: scale(0.95);
      }
      to {
        transform: scale(1);
      }
    }
  </style>
  
  <main>
    <div class="container">
      <h1>{message}</h1>
      <p>今日はSvelteについてご紹介させていただきます。どうぞよろしくお願いいたします。</p>
    </div>
  </main>
  