/******************************upload Image************************************/

const uploadPdf = document.querySelector(".upload-pdf");
const FileInputPdf = document.querySelector(".input-pdf");
uploadPdf.addEventListener("click", function(e) {
  e.preventDefault();
  FileInputPdf.click();
  FileInputPdf.addEventListener("change", function(e) {
    // const pdfFrame = document.querySelector(".combined");
    const pdfFrame = createPdfBox();
    const frame = document.createElement("iframe");
    let src = URL.createObjectURL(e.target.files[0]);
    frame.src = src;
    frame.setAttribute("width", "300px");
    frame.setAttribute("height", "200px");
    frame.setAttribute("class", "pdfFrame");
    pdfFrame.appendChild(frame);
    frame.onload = function() {
      URL.revokeObjectURL(frame.src);
    };
  });
});

const uploadImg = document.querySelector(".upload-img");
const FileInput = document.querySelector(".input-img");
uploadImg.addEventListener("click", function(e) {
  e.preventDefault();
  FileInput.click();
  FileInput.addEventListener("change", function(e) {
    const writingPad = createImgBox();

    const img = document.createElement("img");
    let src = URL.createObjectURL(e.target.files[0]);
    img.src = src;
    img.setAttribute("class", "uploadedImgStyle");
    writingPad.appendChild(img);
    img.onload = function() {
      URL.revokeObjectURL(img.src);
    };
  });
});
/***********************************download Image*******************************/

const downloadTool = document.querySelector(".download-tool");
downloadTool.addEventListener("click", function(e) {
  const a=document.createElement("a");
  a.download="file.png";
a.href=board.toDataURL("image/png");
a.click();
a.remove()
});

