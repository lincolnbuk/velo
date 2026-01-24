import { test, expect } from '@playwright/test'

/// AAA - Arrange, Act, Assert

test('deve consultar um pedido aprovado', async ({ page }) => {
  // (Arrange)
  await page.goto('http://localhost:5173/')
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')

  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')
  
  // (Act)
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-2WHJQO')
  await page.getByTestId('search-order-button').click()

  //await page.locator('//label[text()="Número do Pedido"]/..//input').fill('VLO-2WHJQO')
  //await page.getByLabel('Número do Pedido').fill('VLO-2WHJQO')
  //await page.getByPlaceholder('Ex: VLO-ABC123').fill('VLO-2WHJQO') 

  // (Assert)
  await expect(page.getByTestId('order-result-VLO-2WHJQO')).toContainText('VLO-2WHJQO'); //Desafio 'order-result-id'
  //await expect(page.getByTestId('order-result-id')).toBeVisible({timeout: 10_000}) 
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-2WHJQO')

  await expect(page.getByTestId('order-result-VLO-2WHJQO')).toContainText('APROVADO'); //Desafio 'order-result-status'
  //await expect(page.getByTestId('order-result-status')).toBeVisible()
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')
})