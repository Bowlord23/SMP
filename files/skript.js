{\rtf1\ansi\ansicpg1251\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 CourierNewPSMT;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue194;\red255\green255\blue255;\red0\green0\blue0;
\red15\green112\blue1;\red146\green26\blue32;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c80392;\cssrgb\c100000\c100000\c100000;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c0;\cssrgb\c64706\c16471\c16471;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28300\viewh15220\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs32 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function\cf4 \strokec4 \'a0myFunction() \{\
\'a0\'a0\cf5 \strokec5 /* Get the text field */\cf4 \strokec4 \
\'a0\'a0\cf2 \strokec2 var\cf4 \strokec4 \'a0copyText = document.getElementById(\cf6 \strokec6 "myInput"\cf4 \strokec4 );\
\
\'a0\'a0\cf5 \strokec5 /* Select the text field */\cf4 \strokec4 \
\'a0 copyText.select();\
\
\'a0\'a0\cf5 \strokec5 /* Copy the text inside the text field */\cf4 \strokec4 \
\'a0 document.execCommand(\cf6 \strokec6 "copy"\cf4 \strokec4 );\
\
\'a0\'a0\cf5 \strokec5 /* Alert the copied text */\cf4 \strokec4 \
\'a0 alert(\cf6 \strokec6 "Copied the text: "\cf4 \strokec4 \'a0+ copyText.value);\
\}}