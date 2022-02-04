from selenium import webdriver
import pyautogui
from time import sleep
import pyperclip as clipboard
from selenium.common.exceptions import NoSuchElementException 
import os

# NOTE: Búsqueda para Github => escribir los lenguajes en estos formatos:

# p AND q
# p OR q
# p NOT q
# p AND q NOT r
# p OR q NOT r
# p AND q AND r AND 

# NOTE: Para buscar en Google => escribir el link de la página de búsqueda

# busqueda = "java"

busqueda = "https://www.google.com/search?q=%22backend%22++EN+%22ecuador%22+site%3Aec.linkedin.com%2Fin%2F+OR+site%3Aec.linkedin.com%2Fpub%2F+-site%3Aec.linkedin.com%2Fpub%2Fdir%2F&biw=1366&bih=625&sxsrf=AOaemvIwCIpHC5jmfUyn3gFSXT8cqOB3gg%3A1642018693605&ei=hTffYfS6JJ-UwbkPl_-9mAM&ved=0ahUKEwi0kcmnhK31AhUfSjABHZd_DzMQ4dUDCA4&oq=%22backend%22++EN+%22ecuador%22+site%3Aec.linkedin.com%2Fin%2F+OR+site%3Aec.linkedin.com%2Fpub%2F+-site%3Aec.linkedin.com%2Fpub%2Fdir%2F&gs_lcp=Cgdnd3Mtd2l6EAxKBAhBGAFKBAhGGABQ2B5YjlpgvmxoAnAAeACAAQCIAQCSAQCYAQCgAQHAAQE&sclient=gws-wiz"

driver = webdriver.Chrome("C:/Users/USUARIO/Desktop/chromedriver.exe")

def loginGithub():
    driver.get("https://github.com/login")
    driver.find_element_by_id("login_field").send_keys("mazabandalenin180@gmail.com")
    driver.find_element_by_id("password").send_keys("1850994623@Lenin")
    driver.find_element_by_xpath("/html/body/div[3]/main/div/div[4]/form/div/input[12]").click()

def buscarTalento(link):
    driver.get(link)
    archivo = open("C:/Users/USUARIO/Desktop/recruitment-automation/talentScrapping.js", "r", encoding="utf8")
    texto = archivo.read()
    clipboard.copy(texto)
    pyautogui.click(200, 200)
    pyautogui.hotkey('ctrl', "shift", 'j') 
    sleep(2)
    pyautogui.hotkey("ctrl", "v")
    pyautogui.hotkey("enter")
    archivo.close()
    pyautogui.hotkey('ctrl', "shift", 'j') 

def copyToTalentosFile():
    copiar = open("C:/Users/USUARIO/Desktop/recruitment-automation/sendJobsToAirtable.js", "a+", encoding="utf8")
    copiar.write(clipboard.paste())
    copiar.write(",\n")
    copiar.close()

def check_exists_various_pagesGithub(pagination):
    try:
        element = driver.find_element_by_class_name(pagination)       
        sleep(1) 
        elements = element.find_elements_by_tag_name("a")
        rango = int(elements[len(elements)-2].text)
        for i in range(1, rango):
            driver.find_element_by_class_name("next_page").click()
            buscarTalento(driver.current_url)
            sleep(1)
            copyToTalentosFile()
    except NoSuchElementException:
        return False
    return True

def check_exists_various_pagesGoogle(path):
    try:
        element = driver.find_element_by_xpath(path)       
        sleep(1) 
        elements = element.find_elements_by_tag_name("td")

        rango = int(elements[len(elements)-2].text)

        for i in range(1, rango):
            driver.find_element_by_xpath('//*[@id="pnnext"]/span[2]').click()
            buscarTalento(driver.current_url)
            sleep(1)
            copyToTalentosFile()
    except NoSuchElementException:
        return False
    return True


if("https" in busqueda):
    buscarTalento(busqueda)
    check_exists_various_pagesGoogle("/html/body/div[7]/div/div[10]/div[1]/div/div[6]/span[1]/table/tbody")
else:
    linkGithub = "https://github.com/search?q={}+location%3AEcuador&type=Users&ref=advsearch&l=&l=".format(busqueda)
    loginGithub()
    buscarTalento(linkGithub)
    check_exists_various_pagesGithub("pagination")

sleep(1)
copyToTalentosFile()

driver.close()

copiar = open("C:/Users/USUARIO/Desktop/recruitment-automation/sendJobsToAirtable.js", "a+", encoding="utf8")
copiar.write("];\n\n")
moreCode = open("C:/Users/USUARIO/Desktop/recruitment-automation/utils/moreCode.js", "r", encoding="utf8")
texto = moreCode.read()
clipboard.copy(texto)
copiar.write(clipboard.paste())
moreCode.close()
copiar.close()

RUTA_ARCHIVO = "C:/Users/USUARIO/Desktop/recruitment-automation/sendJobsToAirtable.js"
os.system(f'start {os.path.realpath(RUTA_ARCHIVO)}')
sleep(3)
pyautogui.click(500, 200)
sleep(0.5)
pyautogui.hotkey("ctrl", "capslock")


print("********** Búsqueda de talentos exitosa **********")