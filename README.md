# Konami Code

Super quick Konami code generator. Just type in the magic: 
    
    /\ /\ \/ \/ < > < > B A 

# Requirements

jQuery. Pretty much it.

# Useage

Add the callback function in the init function to launch whatever you want after someone enters the code:

    KonamiCode.init(function() {
        alert("Code Entered!");
    });

You can toggle the enter button firing off everything (like Start) instead of the last A (the default is false).

    Konami.useEnter = true;
