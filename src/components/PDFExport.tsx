// src/components/PDFExport.tsx
import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface PDFExportProps {
    targetRef: React.RefObject<HTMLDivElement | null>; // Change this line
    fileName?: string; // Add optional fileName
}

export const PDFExport: React.FC<PDFExportProps> = ({ targetRef, fileName = 'resume.pdf' }) => { // Add fileName default
    const generatePDF = async () => {
        if (!targetRef.current) {
            console.error('Target element is null.  Make sure the ref is attached to a valid element.');
            return;
        }
        // ... the rest of your generatePDF function ...
         const canvas = await html2canvas(targetRef.current, {
         //scale: 2,
         useCORS: true,
         logging: false
         });

         const imgData = canvas.toDataURL('image/png');
         const pdf = new jsPDF('p', 'mm', 'a4');
         const pdfWidth = pdf.internal.pageSize.getWidth();
         const pdfHeight = pdf.internal.pageSize.getHeight();
         const canvasRatio = canvas.width / canvas.height;
         const pdfRatio = pdfWidth / pdfHeight;

         let width, height;

         if (canvasRatio > pdfRatio) {
         width = pdfWidth;
         height = pdfWidth / canvasRatio;
         } else {
         height = pdfHeight;
         width = pdfHeight * canvasRatio;
         }

         pdf.addImage(imgData, 'PNG', 0, 0, width, height);
         pdf.save(fileName);
    };

    return (
        <button
            onClick={generatePDF}
            className="px-4 py-2 bg-[#3F7D58] text-white rounded-md hover:bg-[#2D5A3F]"
        >
            Download as PDF
        </button>
    );
};