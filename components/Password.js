import { useState } from "react";

function Password() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [timeToCrack, setTimeToCrack] = useState(0);
  const [upperCasePresent, setUpperCasePresent] = useState(false);
  const [lowerCasePresent, setLowerCasePresent] = useState(false);
  const [numberPresent, setNumberPresent] = useState(false);
  const [specialCharPresent, setSpecialCharPresent] = useState(false);

  const estimatePasswordStrength = (event) => {
    const password = event.target.value;
    let strength = 0;
    let possibleCharacters = 0;

    // Проверка длины пароля
    if (password.length >= 8) {
      strength += 1;
    }

    // Проверка наличия заглавных букв
    if (/[A-Z]/.test(password)) {
      strength += 1;
      possibleCharacters += 26;
      setUpperCasePresent(true);
    } else {
      setUpperCasePresent(false);
    }

    // Проверка наличия строчных букв
    if (/[a-z]/.test(password)) {
      strength += 1;
      possibleCharacters += 26;
      setLowerCasePresent(true);
    } else {
      setLowerCasePresent(false);
    }

    // Проверка наличия цифр
    if (/[0-9]/.test(password)) {
      strength += 1;
      possibleCharacters += 10;
      setNumberPresent(true);
    } else {
      setNumberPresent(false);
    }

    // Проверка наличия специальных символов
    if (/[^A-Za-z0-9]/.test(password)) {
      strength += 1;
      possibleCharacters += 32;
      setSpecialCharPresent(true);
    } else {
      setSpecialCharPresent(false);
    }

    // Оценка времени взлома пароля
    const possibleCombinations = Math.pow(possibleCharacters, password.length);
    const timeToCrackSeconds = possibleCombinations / (1000000000 * 2); // Приблизительное время в секундах, предполагая скорость перебора 1 миллиард в секунду
    const timeToCrackDays = Math.floor(timeToCrackSeconds / (3600 * 24)); // Время в днях
    const timeToCrackMonths = Math.floor(timeToCrackDays / 30); // Время в месяцах
    const timeToCrackYears = Math.floor(timeToCrackMonths / 12); // Время в годах

    setPassword(password);
    setStrength(strength);
    setTimeToCrack(
      ` ${timeToCrackYears}года(лет), ${timeToCrackMonths % 12} месяца(ев), ${
        timeToCrackDays % 30
      } дня(ей)`
    );
  };

  let passwordStrengthText = "";
  switch (strength) {
    case 0:
    case 1:
      passwordStrengthText = "очень лёгкий";
      break;
    case 2:
      passwordStrengthText = "лёгкий";
      break;
    case 3:
      passwordStrengthText = "нормальный";
      break;
    case 4:
      passwordStrengthText = "хороший";
      break;
    case 5:
      passwordStrengthText = "отличный";
      break;
    default:
      passwordStrengthText = "";
  }

  return (
    <div className="password-section-container">
      <h3>Введите пароль:</h3>
      <input
        type="password"
        id="password"
        value={password}
        onChange={estimatePasswordStrength}
      />
      <div>
        <p style={{ color: upperCasePresent ? "green" : "#6a6a6a" }}>
          Верхний регистер
        </p>
        <p style={{ color: lowerCasePresent ? "green" : "#6a6a6a" }}>
          Нижний регистер
        </p>
        <p style={{ color: numberPresent ? "green" : "#6a6a6a" }}>Цифры</p>
        <p style={{ color: specialCharPresent ? "green" : "#6a6a6a" }}>
          Спец.символы
        </p>
      </div>
      <p>Сложность пароля: {passwordStrengthText}</p>
      <p>Время взлома: {timeToCrack}</p>
    </div>
  );
}

export default Password;