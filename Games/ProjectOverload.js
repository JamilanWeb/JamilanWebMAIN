function commands(command) {
  if (command.includes('SetCookie ')) {
    var t = command.split("SetCookie ")
    cookies=t[1]
    localStorage.setItem("cookies", cookies);
    cookiesstoredonhtml.textContent = "Cookies: "+cookies
    } else {
     if (command.includes('RemoveCookie ')) {
      var t2 = command.split('RemoveCookie ')
       if (cookies>t2[1]-1) {
        RemoveCookieFail=false
        cookies=cookies-t2[1]
        cookiesstoredonhtml.innerHTML = "Cookies: "+cookies
        localStorage.setItem("cookies", cookies);
        } else {
          RemoveCookieFail=true
          console.log("Not enough")
          return RemoveCookieFail
          }
          } else {
            if (command.includes('Autoclicker ')) {
              var t3 = command.split('Autoclicker ')
              var num = 0

              while (num<t3[1]) {
                num++
                autoclicker()
              }
            } else {
              if (command.includes('Project_Overflow-GUI ')) {
                var t4 = command.split('Project_Overflow-GUI ')
                if (t4[1]=="open") {
                  OVERFLOWGUIdia.open = true
                } else {
                  errorsfx.play()
                  OVERFLOWdiaError.open = true
                }
              } else {
                if (command.includes('Taco bell ')) {
                  var t5 = command.split('Taco bell ')
                  if (t5[1]=="Bong") {
                    var tingbing = new Audio("https://drive.google.com/uc?export=download&id=1ar6ragu0oojRMr7Uufvnxxt684rLM7HC&type=mp3")
                    tingbing.play()
                  } else {
                    errorsfx.play()
                    OVERFLOWdiaError.open = true
                  }
                } else {
                  if (command.includes('Custom_Error_Dia ')) {
                    var t6 = command.split("Custom_Error_Dia Head: ")
                    var t7 = t6[1].split(" Error code: ")
                    if (t7[1]==3) {
                      errorsfx.play()
                      OVERFLOWdiaError2.open=true
                      tdia.hidden = true
                      OVERFLOWdia.open = false
                      localStorage.setItem("Error_Command", command)
                      Head_Text.textContent = t6[1]
                      autobutton.hidden = true
                      ErrorDisableUsername.hidden = true
                      cookiesstoredonhtml.hidden = true
                      ErrorDisableImage.hidden = true
                      ErrorDisableButton.hidden = true
                      Modifyable_error_dialog_close.hidden = true
                      ErrorText2.textContent = "A Serious error has occurred"
                    } else {
                      Head_Text.textContent = t6[1]
                      errorsfx.play()
                      OVERFLOWdiaError2.open=true
                      OVERFLOWdia.open = false
                    }
                  } else {
                    if (command.includes('Page_Load_Command ')) {
                      var t8 = comamnd.split("Page_Load_Command Command: ")
                      localStorage.setItem("Page_Load_Command", t8[1])
                    } else {
                      errorsfx.play()
                      OVERFLOWdiaError.open = true
                    }
                  }
                }
              }
            }            
          }
        }
      }
