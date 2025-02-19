<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">const questions = [</p>
<p class="p1"><span class="Apple-converted-space">    </span>"What was the best part of your day today?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"If you could travel anywhere, where would you go and why?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"What’s something you’ve learned recently that surprised you?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"How do you decide what’s true or false when you see something online?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"What’s a trend that you don’t understand but everyone else seems to love?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"What’s one thing about school you wish adults understood better?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"If you could change one rule in the world, what would it be?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"What’s something you’ve done recently that made you feel proud?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"What’s the last thing that made you really laugh?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"If you could have dinner with any three people, dead or alive, who would they be?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"What’s one piece of advice you’d give to someone younger than you?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"What’s a stereotype about teens that you think is completely wrong?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"What’s the last thing you watched or listened to that made you think differently?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"If you had to explain your generation to someone from the past, what would you say?",</p>
<p class="p1"><span class="Apple-converted-space">    </span>"What’s something that adults worry about too much?",</p>
<p class="p1">];</p>
<p class="p2"><br></p>
<p class="p1">function showRandomQuestion() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const randomIndex = Math.floor(Math.random() * questions.length);</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("question").textContent = questions[randomIndex];</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">// Show a random question when the page loads</p>
<p class="p1">window.onload = showRandomQuestion;</p>
</body>
</html>
