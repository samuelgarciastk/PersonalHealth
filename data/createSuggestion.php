<?php
$nameList = ['Admin', 'Bob', 'Caesar', 'Isaac'];
$titleList = ['小建议', '注意', '一些建议'];
$contentList = ['早睡早起。', '多喝水。', '该吃药了。', '多运动。', '少看手机。', '每天跑步1小时。', '不要总是看电视。'];
$xml = new DOMDocument('1.0', 'utf-8');
$root = $xml->createElement('suggestion');
$xml->appendChild($root);
for ($i = 0; $i < 30; $i++) {
	$advice = $xml->createElement('advice');

	$num1  = rand(0, 3);
	while (($num2 = rand(0, 2)) == $num1) {;}
	$username = $xml->createElement('username');
	$username_text = $xml->createTextNode($nameList[$num1]);
	$username->appendChild($username_text);
	$userfrom = $xml->createElement('userfrom');
	$userfrom_text = $xml->createTextNode($nameList[$num2]);
	$userfrom->appendChild($userfrom_text);
	$datetime = $xml->createElement('datetime');
	$datetime_text = $xml->createTextNode(date('Y-m-d H:i:s', mt_rand(strtotime('2000-01-01'), strtotime('2015-12-7'))));
	$datetime->appendChild($datetime_text);
	$title = $xml->createElement('title');
	$title_text = $xml->createTextNode($titleList[rand(0, count($titleList) - 1)]);
	$title->appendChild($title_text);
	$content = $xml->createElement('content');
	$content_text = $xml->createTextNode($contentList[rand(0, count($contentList) - 1)]);
	$content->appendChild($content_text);
	$isread = $xml->createElement('isread');
	$isread_text = $xml->createTextNode(rand(0, 1));
	$isread->appendChild($isread_text);
	$class = $xml->createElement('class');
	$class_text = $xml->createTextNode(rand(0, 1));
	$class->appendChild($class_text);

	$advice->appendChild($username);
	$advice->appendChild($userfrom);
	$advice->appendChild($datetime);
	$advice->appendChild($title);
	$advice->appendChild($content);
	$advice->appendChild($isread);
	$advice->appendChild($class);
	$root->appendChild($advice);
}
$xml->save('suggestionData.xml');
?>