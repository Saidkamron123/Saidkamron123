<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Хуг Кликер 💙</title>
  <style>
    body {
      text-align: center;
      font-family: sans-serif;
      background-color: #111;
      color: #fff;
    }
    #huggy {
      width: 200px;
      cursor: pointer;
      transition: transform 0.1s;
    }
    #huggy:active {
      transform: scale(0.95);
    }
  </style>
</head>
<body>
  <h1>Хуг Кликер 💙</h1>
  <img id="huggy" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Huggy_Wuggy.png/220px-Huggy_Wuggy.png" alt="Huggy Wuggy">
  <p>Кликов: <span id="count">0</span></p>

  <script>
    let count = 0;
    const huggy = document.getElementById('huggy');
    const counter = document.getElementById('count');

    huggy.addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });
  </script>
</body>
</html>

<!--
**Saidkamron123/Saidkamron123** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
