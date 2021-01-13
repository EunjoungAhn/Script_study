//출력된 사진 3장 숨기기

//배열 변수
function showslide(n){
    slide = document.getElementsByClassName("mySlide"); //사진 3장
    //silde[2].style.display = "none";// 3번째 사진만 없애 본다.
    for(i=0; i<slide.length; i++){
        slide[i].style.display="none";// 0, 1, 2 모든 사진 없애기.
        }
        // n값이 1~3일때만 보이도록
        //n값이 3보다 크면 indexSlide = 1;번으로 바꾸도록
        if(n>slide.length) indexSlide =1;

        //n값이 1보다 작으면 insexSlide = slide.length;
        if(n<1) indexSlide = slide.length;

        //현재 슬라이드 번호의 이미지 보이기
        slide[indexSlide-1].style.display="block";// 0 번째 사진만 보이기.
    }

indexSlide = 1; // 실제 이미지의 순서번호
showslide(indexSlide);

//test
function plusSlide(n){
    temp = indexSlide+=n;
    alert(temp); //test
    //showslide(indexSlide+=n);
    showslide(temp);

}