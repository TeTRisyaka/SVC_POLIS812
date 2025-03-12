const { test, expect } = require('@playwright/test');

// Базовый URL страницы
const BASE_URL = 'https://polis812.github.io/vacuu/';
const TEST_URL = 'https://polis812.github.io';

test('Проверка наличия логотипа', async ({ page }) => {
  await page.goto(BASE_URL);
  const logo = await page.$('.logo'); // Проверяем, что элемент с классом .logo существует
  expect(logo).not.toBeNull();
});

test('Проверка наличия кнопки "Get Started"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Get Started'); // Проверяем наличие кнопки с текстом "Get Started"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке "Get Started"', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('text=Get Started'); // Кликаем на кнопку "Get Started"
  await page.waitForNavigation(); // Ждем перехода на новую страницу
  expect(page.url()).toBe(TEST_URL + '/features'); // Проверяем, что URL изменился на раздел #features
});

test('Проверка наличия кнопки "Insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Insurance'); // Проверяем наличие кнопки с текстом "Insurance"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке "Insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('text=Insurance'); // Кликаем на кнопку "Insurance"
  expect(page.url()).toBe(TEST_URL + '/insurance'); // Проверяем, что URL изменился на /insurance
});

test('Проверка наличия кнопки "About us"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=About us'); // Проверяем наличие кнопки с текстом "About us"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке "About us"', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('text=About us'); // Кликаем на кнопку "About us"
  expect(page.url()).toBe(TEST_URL + '/about'); // Проверяем, что URL изменился на /about
});

test('Проверка наличия кнопки "Blog"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Blog'); // Проверяем наличие кнопки с текстом "Blog"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке "Blog"', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('text=Blog'); // Кликаем на кнопку "Blog"
  expect(page.url()).toBe(TEST_URL + '/blog'); // Проверяем, что URL изменился на /Blog
});

test('Проверка наличия кнопки "Review"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Review'); // Проверяем наличие кнопки с текстом "Review"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке "Review"', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('text=Review'); // Кликаем на кнопку "Review"
  expect(page.url()).toBe(TEST_URL + '/review'); // Проверяем, что URL изменился на /review
});

test('Проверка наличия кнопки "Contact"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Contact'); // Проверяем наличие кнопки с текстом "Contact"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке "Contact"', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('text=Contact'); // Кликаем на кнопку "Contact"
  expect(page.url()).toBe(TEST_URL + '/contact'); // Проверяем, что URL изменился на /contact
});

test('Проверка наличия кнопки "My account"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=My account'); // Проверяем наличие кнопки с текстом "My account"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке "My account"', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.click('text=My account'); // Кликаем на кнопку "My account"
  expect(page.url()).toBe(TEST_URL + '/profile'); // Проверяем, что URL изменился на /profile
});

test('Проверка наличия кнопки для "Car insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.locator('//*[@id="app"]/div[2]/div[5]/div/div[1]/a'); // Проверяем наличие кнопки для "Car insurance"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке для "Car insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.locator('//*[@id="app"]/div[2]/div[5]/div/div[1]/a')
  page.click(getStartedButton); // Кликаем на кнопку для "Car insurance"
  expect(page.url()).toBe(TEST_URL + '/car'); // Проверяем, что URL изменился на /car
});

test('Проверка наличия кнопки для "Home insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.locator('//*[@id="app"]/div[2]/div[5]/div/div[2]/a'); // Проверяем наличие кнопки для "Home insurance"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке для "Home insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.locator('//*[@id="app"]/div[2]/div[5]/div/div[2]/a')
  page.click(getStartedButton); // Кликаем на кнопку для "Home insurance"
  expect(page.url()).toBe(TEST_URL + '/home'); // Проверяем, что URL изменился на /home
});

test('Проверка наличия кнопки для "Travel insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.locator('//*[@id="app"]/div[2]/div[5]/div/div[3]/a'); // Проверяем наличие кнопки для "Travel insurance"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке для "Travel insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.locator('//*[@id="app"]/div[2]/div[5]/div/div[3]/a')
  page.click(getStartedButton); // Кликаем на кнопку для "Travel insurance"
  expect(page.url()).toBe(TEST_URL + '/travel'); // Проверяем, что URL изменился на /travel
});

test('Проверка наличия кнопки для "Pet insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.locator('//*[@id="app"]/div[2]/div[5]/div/div[4]/a'); // Проверяем наличие кнопки для "Pet insurance"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке для "Pet insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.locator('//*[@id="app"]/div[2]/div[5]/div/div[4]/a')
  page.click(getStartedButton); // Кликаем на кнопку для "Pet  insurance"
  expect(page.url()).toBe(TEST_URL + '/pet'); // Проверяем, что URL изменился на /pet
});

test('Проверка наличия пагинатора для отзывов', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('div.reviews__actions');
  expect(getStartedButton).not.toBeNull();
});

test('Проверка наличия кнопки вперед для отзывов', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('div.reviews__actions :nth-child(1)');
  expect(getStartedButton).not.toBeNull();
});

test('Проверка наличия кнопки назад для отзывов', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('div.reviews__actions :nth-child(2)');
  expect(getStartedButton).not.toBeNull();
});

test('Проверка нажатия кнопки вперед для отзывов', async ({ page }) => {
  await page.goto(BASE_URL);
  // Получаем текст первого отзыва на первой странице
  const firstReviewText = await page.textContent('div.reviews__list > div:nth-child(1) > p');
//  const getStartedButton = await page.$('div.reviews__actions :nth-child(1)');
  await page.locator('div.reviews__actions :nth-child(1)').click();
  const newFirstReviewText = await page.textContent('div.reviews__list > div:nth-child(1) > p');
  expect(newFirstReviewText).not.toBe(firstReviewText); // Убеждаемся, что отзывы разные
});

test('Проверка нажатия кнопки назад для отзывов', async ({ page }) => {
  await page.goto(BASE_URL); 
  const firstReviewText = await page.textContent('div.reviews__list > div:nth-child(1) > p'); // Получаем текст первого отзыва на первой странице
 // const getStartedButton = await page.$('div.reviews__actions :nth-child(2)');
  await page.locator('div.reviews__actions :nth-child(2)').click();
  const newFirstReviewText = await page.textContent('div.reviews__list > div:nth-child(1) > p');
  expect(newFirstReviewText).not.toBe(firstReviewText); // Убеждаемся, что отзывы разные
});

test('Проверка наличия кнопки "Choose insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Choose insurance'); // Проверяем наличие кнопки  "Choose insurance"
  expect(getStartedButton).not.toBeNull();
});

test('Проверка перехода по кнопке "Choose insurance"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Choose insurance');
  page.click(getStartedButton); // Кликаем на кнопку  "Choose insurance"
  expect(page.url()).toBe(BASE_URL + 'insurance'); // Проверяем, что URL изменился на /insurance
});

test('Проверка перехода по кнопке "Instagramm"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Choose insurance');
  page.click(getStartedButton); // Кликаем на кнопку  "Instagramm"
  expect(page.url()).toBe(BASE_URL + '#'); // Проверяем, что URL изменился на /#
});

test('Проверка перехода по кнопке "Twitter"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Choose insurance');
  page.click(getStartedButton); // Кликаем на кнопку  "Twitter"
  expect(page.url()).toBe(BASE_URL + '#'); // Проверяем, что URL изменился на /#
});

test('Проверка перехода по кнопке "Facebook"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Choose insurance');
  page.click(getStartedButton); // Кликаем на кнопку  "Facebook"
  expect(page.url()).toBe(BASE_URL + '#'); // Проверяем, что URL изменился на /#
});

test('Проверка перехода по кнопке "Telegramm"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Choose insurance');
  page.click(getStartedButton); // Кликаем на кнопку  "Telegramm"
  expect(page.url()).toBe(BASE_URL + '#'); // Проверяем, что URL изменился на /#
});

test('Проверка перехода по кнопке "Terms"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Choose insurance');
  page.click(getStartedButton); // Кликаем на кнопку  "Terms"
  expect(page.url()).toBe(TEST_URL + 'terms'); // Проверяем, что URL изменился на /Terms
});

test('Проверка перехода по кнопке "Privacy"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Privacy');
  page.click(getStartedButton); // Кликаем на кнопку  "Privacy"
  expect(page.url()).toBe(TEST_URL + 'privacy'); // Проверяем, что URL изменился на /Privacy
});

test('Проверка перехода по кнопке "Cookies"', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('text=Cookies');
  page.click(getStartedButton); // Кликаем на кнопку  "Cookies"
  expect(page.url()).toBe(TEST_URL + 'cookies'); // Проверяем, что URL изменился на /Cookies
});

test('Проверка перехода по кнопке "Vakuu.com" в футтере', async ({ page }) => {
  await page.goto(BASE_URL);
 // const getStartedButton = await page.$('div.footer__bottom > a');
  await page.locator('div.footer__bottom > a').click();  // Кликаем на кнопку  "Vakuu.com"
  expect(page.url()).toBe(BASE_URL); // Проверяем, что URL не изменился
});

test('Проверка поля ввода почты. Валидное значение', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('input[type=text]');
  await page.locator('input[type=text]').fill('marry@gmail.com');
  const resumeButton = await page.locator('[Class=submit-btn]');
  await page.locator('[Class=submit-btn]').click(); // Кликаем на кнопку "Resume"
  const success = await page.textContent('#swal2-title');
  expect(success).toBe('Successfully send'); 
});

test('Проверка поля ввода почты. Не валидное значение', async ({ page }) => {
  await page.goto(BASE_URL);
  const getStartedButton = await page.$('input[type=text]');
  await page.locator('input[type=text]').fill('@gmail.com'); // 
  const resumeButton = await page.locator('[Class=submit-btn]');
  await page.locator('[Class=submit-btn]').click(); // Кликаем на кнопку "Resume"
  const success = await page.textContent('#swal2-title');
  expect(success).toBe('Error'); 
});

test('Проверка поля ввода почты. Пустое поле', async ({ page }) => {
  await page.goto(BASE_URL);
  const resumeButton = await page.locator('[Class=submit-btn]');
  await page.locator('[Class=submit-btn]').click(); // Кликаем на кнопку "Resume"
  const success = await page.textContent('#swal2-title');
  expect(success).toBe('Error'); 
});

test('Проверка изменения языка на странице', async ({ page }) => {
  await page.goto(BASE_URL);
  const selector = page.locator('div.header > select');
  await selector.selectOption("FIN"); // Кликаем на кнопку "EN"
  const getStartedButton = await page.textContent('text=Welcome to Insurance aggregator - Vakuu');
  expect(getStartedButton).toBe("Tervetuloa vakuutusyhdistäjälle - Vakuu"); // Проверяем, что текст Welcome to Insurance aggregator - Vakuu изменил язык
});