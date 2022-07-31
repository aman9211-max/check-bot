import undetected_chromedriver as uc
from selenium.webdriver.common.action_chains import ActionChains
from random import randint
chrome_options=uc.ChromeOptions()
#adding options to the webdriver instance to avoid most of the exisiting bot checks

#chrome_options.add_argument("--headless")
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument("--start-maximized")
chrome_options.add_argument('--blink-settings=imagesEnabled=false')
chrome_options.add_argument('--blink-settings=videosEnabled=false')
chrome_options.add_argument('--disable-blink-features=AutomationControlled')

driver=uc.Chrome(options=chrome_options, use_subprocess=True)           #initialising Chrome object
driver.get(f'https://aman9211-max.github.io/check-bot/')                #navigating to our testing webpage
#driver.get(f'http://127.0.0.1:5500/')
action = ActionChains(driver)
for x in range(1000):                           #running a maximum of 1000 instances of mousemove events via the bot
    try:
        xc=randint(200,300)                     #generating a random coordinate value for each axis
        yc=randint(200,300)
        if(randint(0,1)): xc=-xc                #deciding the coordinate quadrant 
        if(randint(0,1)): yc=-yc
        action.move_by_offset(xc, yc)           #moving the cursor by the deicded coordinate offset
        action.perform()                        #performing the ActionChains event
    except: pass