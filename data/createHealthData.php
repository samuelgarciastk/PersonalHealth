<?php
$nameList = ['Admin', 'Bob', 'Caesar', 'Isaac'];
$xml = new DOMDocument('1.0', 'utf-8');
$root = $xml->createElement('health');
$xml->appendChild($root);
for ($i = 0; $i < 10; $i++) {
	$user = $xml->createElement('user');

	$name = $xml->createAttribute('name');
	$name_text = $xml->createTextNode($nameList[rand(0, 3)]);
	$name->appendChild($name_text);
	$user->appendChild($name);

	$date = $xml->createAttribute('date');
	$date_text = $xml->createTextNode(date('Y-m-d', mt_rand(strtotime('2000-01-01'), strtotime('2015-12-7'))));
	$date->appendChild($date_text);
	$user->appendChild($date);

	$exercise = $xml->createElement('exercise');
	$runtime = $xml->createElement('runtime');
	$runtime_text = $xml->createTextNode(rand(0, 18000) / 100);
	$runtime->appendChild($runtime_text);
	$cycletime = $xml->createElement('cycletime');
	$cycletime_text = $xml->createTextNode(rand(0, 18000) / 100);
	$cycletime->appendChild($cycletime_text);
	$exercise->appendChild($runtime);
	$exercise->appendChild($cycletime);
	$user->appendChild($exercise);

	$body = $xml->createElement('body');
	$weight = $xml->createElement('weight');
	$weight_text = $xml->createTextNode(rand(5000, 7000) / 100);
	$weight->appendChild($weight_text);
	$height = $xml->createElement('height');
	$height_text = $xml->createTextNode(rand(17000, 18000) / 100);
	$height->appendChild($height_text);
	$heartrate = $xml->createElement('heartrate');
	$heartrate_text = $xml->createTextNode(rand(50, 100));
	$heartrate->appendChild($heartrate_text);
	$bloodpressure = $xml->createElement('bloodpressure');
	$bloodpressure_text = $xml->createTextNode(rand(8500, 13000) / 100);
	$bloodpressure->appendChild($bloodpressure_text);
	$body->appendChild($weight);
	$body->appendChild($height);
	$body->appendChild($heartrate);
	$body->appendChild($bloodpressure);
	$user->appendChild($body);

	$num = rand(18000, 72000) / 100;
	$percent = round($num * (rand(0, 100) / 100), 2);
	$sleeping = $xml->createElement('sleeping');
	$totaltime = $xml->createElement('totaltime');
	$totaltime_text = $xml->createTextNode($num);
	$totaltime->appendChild($totaltime_text);
	$effective = $xml->createElement('effective');
	$effective_text = $xml->createTextNode($percent);
	$effective->appendChild($effective_text);
	$sleeping->appendChild($totaltime);
	$sleeping->appendChild($effective);
	$user->appendChild($sleeping);

	$root->appendChild($user);
}
$xml->save('healthData.xml');
?>