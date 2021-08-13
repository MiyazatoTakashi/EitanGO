'use strict';
window.onload=()=>{
	const questions=[
		['ぞう','elephant'],
		['しろくま','polarbear'],
		['くじら','whale'],
		['ペンギン','penguin'],
		['ライオン','lion'],
		['カンガルー','kangaroo'],
		['ひと','human'],
		['いぬ','dog'],
		['ねこ','cat'],
		['あり','ant'],
	];
	const ja =document.getElementById('ja');        // 日本語
	const entry=document.getElementById('entry');   // 回答
	const btn=document.getElementById('btn');       // ボタン
	const result=document.getElementById('result'); // 結果表示
	let index=0;
	let correct=0;  // 正解数
	btn.addEventListener('click',()=>{
		let ans=entry.value.toLowerCase();  // 英小文字に変換
		let msg=''; // メッセージを空にする
		if (ans == questions[index][1]){
			correct++;
			msg='☆☆☆ 正 解 ☆☆☆';
		}else{
			msg=`不正解……<br>正解は「 ${questions[index][0]} = ${questions[index][1]} 」`;
		}
		if(index==questions.length-1){
			msg+=`<br>全${questions.length}問中,${correct}問正解`;
			index=-1;
		}
		result.innerHTML=msg;
		result.classList.remove('fade');
		setTimeout(function(){
			result.classList.add('fade');
		},5000);
		setItem(++index);
		entry.focus();
	});
	function setItem(index){
		entry.value='';
		ja.textContent=questions[index][0];
	}
	setItem(index);
}