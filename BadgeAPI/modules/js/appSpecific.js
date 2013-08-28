/*****************************************************************
*	Name    : setBadge
*	Author  : Kony
*	Purpose : To set initial badge value as '0' for button widget 'btnBadge' and application icon.
******************************************************************/	

function setBadge( )
{
	frmBadge.btnBadge.setBadge("0");//Set badge value on  button widget
	if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad")
	{
		kony.application.setApplicationBadgeValue("0");
		frmBadge.lblInstruction2.setVisibility(true);
	}
}

/*****************************************************************
*	Name    : BadgeIncrease
*	Author  : Kony
*	Purpose : To increase the badge value on button 'btnBadge' as well as application icon when ever user clicks the button 'btnBadge'.
******************************************************************/

function BadgeIncrease( )
{
	var counter = kony.os.toNumber(frmBadge.btnBadge.getBadge ()) + 1;// read badge value from button and increment it with 1 
	kony.print("this gets executed " + counter+ " type is "+typeof(counter));
	frmBadge.btnBadge.setBadge(""+counter);// Set badge value on the button widget
	if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad")
		kony.application.setApplicationBadgeValue(""+counter);//Set badge value on app icon
	else
	{
		frmBadge.lblInstruction2.text = "*Your Current Platform Doesn't support application badge on icon."
		frmBadge.lblInstruction2.setVisibility(true)
	}
}

/*****************************************************************
*	Name    : setApplicationBadge
*	Author  : Kony
*	Purpose : To set application badge using user input
******************************************************************/

function setApplicationBadge()
{
	
	if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad")
	{
		var str=frmBadge.tbxSetBadge.text;
		var symbol=["."];
		if(kony.string.containsChars(str,symbol))
		{
			alert("only counting number is acceptable");
		}
		else
		{	
			kony.application.setApplicationBadgeValue(kony.os.toNumber(str));
		}
	}
	else
	{
	alert("Your current platform doesn't support badge on icon.");
	}
}