const config = require("config");


module.exports.approvalEmailHtml = `<html xmlns='http://www.w3.org/1999/xhtml'>
<head> <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' /> <style> .body { background-color:#F9F9F9 }
	.go-to-app {
	  font-size: 18px;
      color: #fff !important;
      text-transform: uppercase;
      text-decoration: none;
      background: #434343;
      padding: 20px;
      border-radius: 5px;
      display: inline-block;
      border: none;
      transition: all 0.4s ease 0s;
    }

    .go-to-app:hover {
      background: #4E26AA;
      letter-spacing: 1px;
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
      transition: all 0.4s ease 0s;
    }

a { color:inherit; text-decoration:none !important; text-decoration:none; } a.cta_button { color:#fff } @media screen and (max-width:560px) { .row{ width:100%!important; width:100%; } .fi{ font-size:14px!important; } .ttl, .ttl a{ font-size:22px!important; } .dscr, .dscr p, .dscr span, .dscr div, .dscr .div{ font-size:18px !important; font-size:18px; } .small-12 .dscr{ width:100%; width:100%!important; min-width:100%; } .small-float-center, .small-text-center { text-align:center !important; } .small-float-center { margin:0 auto !important; float:none !important; } .small-text-left { text-align:left !important; } .small-text-right { text-align:right !important; } .hide-for-large { display:block !important; width:auto !important; overflow:visible !important; max-height:none !important; font-size:inherit !important; line-height:inherit !important } center{ min-width:0!important; } table.container{ width:100%!important; } table.body table.container .hide-for-large, table.body table.container .row.hide-for-large { display:table !important; width:100% !important } table.body table.container .callout-inner.hide-for-large { display:table-cell !important; width:100% !important } table.body table.container .show-for-large { display:none !important; width:0; mso-hide:all; overflow:hidden } table.body img { width:auto; height:auto } table.body center { min-width:0 !important } table.body .container { width:95% !important } table.body .column, table.body .columns { height:auto !important; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box; } table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{ padding-left:8px !important;
			padding-right:8px !important
		} table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns { padding-left:0 !important; padding-right:0 !important } td.small-6, th.small-6, img.small-6 { display:inline-block !important; width:50% !important } img.small-12, td.small-12, th.small-12 { width:100% !important; display:inline-block !important; } .column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 { display:block !important; width:100% !important } img.sclbtn{ min-width:24px!important; min-height:24px!important; max-width:100px!important; } .mcnPreviewText{ display:none !important; } .ssc{ display:inline-block; margin:5px 0; } } </style> </head> <body class='body' style='-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important'> <table class='body' id='publicateemailcontainer' style='background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto'  class='float-center' align='center' valign='top' style='border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;'><table width='640' align='center' class='container float-center' style='background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto' style='padding:0'><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr><td width='100%' style='padding: 0; text-align:center'><img src='https://kassandah.gigmobility.com/static/media/kassandah.2b462a28.PNG' width="50%"/></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;'>  <tr>    <td>      <table border='0' cellspacing='0' cellpadding='0' align='center' >        <tr>          <td align='center' style='padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;' bgcolor='transparent'><h2 dir='auto' style='padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:bold;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;'><span>You have a requisition to approve...</span></h2>			</td>        </tr>      </table>    </td>  </tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 18px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><strong>Hello $name$,</strong></div> <div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">&nbsp;</div> <div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">
		<p style="font-size: 18px;"><strong>See ticket details below</strong></p>
		<table style="border: solid 1px grey; border-collapse: collapse; width: 100%;">
			<th style="border: solid 1px grey;">Ticket Description</thead>
			<th style="border: solid 1px grey;">Ticket Items</thead>
			<th style="border: solid 1px grey;">Due Date</thead>
			<tr style="border: solid 1px grey;"><td style="border: solid 1px grey;">$ticketDescription$</td><td style="border: solid 1px grey;">$ticketItems$</td><td style="border: solid 1px grey;">$dueDate$</td></tr>
		</table>
		</div><br><div style="font-size: 18px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><strong> You can click the button below to
			check that the requisition is okay and approve.<p>Thank you.</p></strong>
		</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr><tr><td style='padding-left:8px;padding-right:8px;padding:0 8px 0 8px;'><div style='font-size: 14px !important; overflow: hidden;'><div style='text-align:center'><a class="go-to-app " href="https://kassandah.gigmobility.com/" rel="nofollow noopener"><strong>GO TO APP</strong></a></div></div></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:0px;padding-top:15px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:6px;padding-right:3px; width:300px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' align='center' valign='top' style='padding:0;text-align:center'>	</td> </tr> <tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr>	<tr> <td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'></td> </tr></table></th> </tr> </tbody> </table> </th> <th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:3px;padding-right:6px; width:300px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' align='center' valign='top' style='padding:0;text-align:center'>	</td> </tr> <tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr>	<tr> <td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;width:293px; margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
														<tr>
<div style="background-color: #4E26AA; height: 200; font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><br><strong><span style="color: #ffffff;">Team KASSANDAH</span><br><span style="color: #ffffff;">(c) CopyRight 2020. All Rights
	Reserved</span><br><span style="color: #ffffff;"><em>Building a
		smarter workflow process</em></span></strong></div>														</tr>




			</tbody>
		</table>
	</th></tr>
        </tbody>

    </table>

        </body>
	</html>
`;

module.exports.approverApprovedEmailHtml = `<html xmlns='http://www.w3.org/1999/xhtml'>
<head> <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' /> <style> .body { background-color:#F9F9F9 }
	.go-to-app {
	  font-size: 18px;
      color: #fff !important;
      text-transform: uppercase;
      text-decoration: none;
      background: #434343;
      padding: 20px;
      border-radius: 5px;
      display: inline-block;
      border: none;
      transition: all 0.4s ease 0s;
    }

    .go-to-app:hover {
      background: #4E26AA;
      letter-spacing: 1px;
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
      transition: all 0.4s ease 0s;
    }

a { color:inherit; text-decoration:none !important; text-decoration:none; } a.cta_button { color:#fff } @media screen and (max-width:560px) { .row{ width:100%!important; width:100%; } .fi{ font-size:14px!important; } .ttl, .ttl a{ font-size:22px!important; } .dscr, .dscr p, .dscr span, .dscr div, .dscr .div{ font-size:18px !important; font-size:18px; } .small-12 .dscr{ width:100%; width:100%!important; min-width:100%; } .small-float-center, .small-text-center { text-align:center !important; } .small-float-center { margin:0 auto !important; float:none !important; } .small-text-left { text-align:left !important; } .small-text-right { text-align:right !important; } .hide-for-large { display:block !important; width:auto !important; overflow:visible !important; max-height:none !important; font-size:inherit !important; line-height:inherit !important } center{ min-width:0!important; } table.container{ width:100%!important; } table.body table.container .hide-for-large, table.body table.container .row.hide-for-large { display:table !important; width:100% !important } table.body table.container .callout-inner.hide-for-large { display:table-cell !important; width:100% !important } table.body table.container .show-for-large { display:none !important; width:0; mso-hide:all; overflow:hidden } table.body img { width:auto; height:auto } table.body center { min-width:0 !important } table.body .container { width:95% !important } table.body .column, table.body .columns { height:auto !important; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box; } table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{ padding-left:8px !important;
			padding-right:8px !important
		} table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns { padding-left:0 !important; padding-right:0 !important } td.small-6, th.small-6, img.small-6 { display:inline-block !important; width:50% !important } img.small-12, td.small-12, th.small-12 { width:100% !important; display:inline-block !important; } .column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 { display:block !important; width:100% !important } img.sclbtn{ min-width:24px!important; min-height:24px!important; max-width:100px!important; } .mcnPreviewText{ display:none !important; } .ssc{ display:inline-block; margin:5px 0; } } </style> </head> <body class='body' style='-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important'> <table class='body' id='publicateemailcontainer' style='background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto'  class='float-center' align='center' valign='top' style='border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;'><table width='640' align='center' class='container float-center' style='background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto' style='padding:0'><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr><td width='100%' style='padding: 0; text-align:center'><img src='https://kassandah.gigmobility.com/static/media/kassandah.2b462a28.PNG' width="50%"/></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;'>  <tr>    <td>      <table border='0' cellspacing='0' cellpadding='0' align='center' >        <tr>          <td align='center' style='padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;' bgcolor='transparent'><h2 dir='auto' style='padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:bold;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;'><span>Kudos.. you approved a requisition</span></h2>			</td>        </tr>      </table>    </td>  </tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 18px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><strong>Hello $name$,</strong></div> <div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">&nbsp;</div> <div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">
		<p style="font-size: 18px;"><strong>You just approved a requisition.<br><br>See ticket details below</strong></p>
		<table style="border: solid 1px grey; border-collapse: collapse; width: 100%;">
			<th style="border: solid 1px grey;">Ticket Description</thead>
			<th style="border: solid 1px grey;">Ticket Items</thead>
			<th style="border: solid 1px grey;">Due Date</thead>
			<tr style="border: solid 1px grey;"><td style="border: solid 1px grey;">$ticketDescription$</td><td style="border: solid 1px grey;">$ticketItems$</td><td style="border: solid 1px grey;">$dueDate$</td></tr>
		</table>
		</div><br><div style="font-size: 18px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><strong> You can view the progress of this ticket and all your approved tickets by clicking on the "Go to App" button below.
	    <p>Cheers.</p></strong>
		</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr><tr><td style='padding-left:8px;padding-right:8px;padding:0 8px 0 8px;'><div style='font-size: 14px !important; overflow: hidden;'><div style='text-align:center'><a class="go-to-app " href="https://kassandah.gigmobility.com/" rel="nofollow noopener"><strong>GO TO APP</strong></a></div></div></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:0px;padding-top:15px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:6px;padding-right:3px; width:300px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' align='center' valign='top' style='padding:0;text-align:center'>	</td> </tr> <tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr>	<tr> <td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'></td> </tr></table></th> </tr> </tbody> </table> </th> <th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:3px;padding-right:6px; width:300px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' align='center' valign='top' style='padding:0;text-align:center'>	</td> </tr> <tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr>	<tr> <td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;width:293px; margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
														<tr>
<div style="background-color: #4E26AA; height: 200; font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><br><strong><span style="color: #ffffff;">Team KASSANDAH</span><br><span style="color: #ffffff;">(c) CopyRight 2020. All Rights
	Reserved</span><br><span style="color: #ffffff;"><em>Building a
		smarter workflow process</em></span></strong></div>														</tr>




			</tbody>
		</table>
	</th></tr>
        </tbody>

    </table>

        </body>
	</html>
`;

module.exports.approverRejectedEmailHtml = `<html xmlns='http://www.w3.org/1999/xhtml'>
<head> <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' /> <style> .body { background-color:#F9F9F9 }
	.go-to-app {
	  font-size: 18px;
      color: #fff !important;
      text-transform: uppercase;
      text-decoration: none;
      background: #434343;
      padding: 20px;
      border-radius: 5px;
      display: inline-block;
      border: none;
      transition: all 0.4s ease 0s;
    }

    .go-to-app:hover {
      background: #4E26AA;
      letter-spacing: 1px;
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
      transition: all 0.4s ease 0s;
    }

a { color:inherit; text-decoration:none !important; text-decoration:none; } a.cta_button { color:#fff } @media screen and (max-width:560px) { .row{ width:100%!important; width:100%; } .fi{ font-size:14px!important; } .ttl, .ttl a{ font-size:22px!important; } .dscr, .dscr p, .dscr span, .dscr div, .dscr .div{ font-size:18px !important; font-size:18px; } .small-12 .dscr{ width:100%; width:100%!important; min-width:100%; } .small-float-center, .small-text-center { text-align:center !important; } .small-float-center { margin:0 auto !important; float:none !important; } .small-text-left { text-align:left !important; } .small-text-right { text-align:right !important; } .hide-for-large { display:block !important; width:auto !important; overflow:visible !important; max-height:none !important; font-size:inherit !important; line-height:inherit !important } center{ min-width:0!important; } table.container{ width:100%!important; } table.body table.container .hide-for-large, table.body table.container .row.hide-for-large { display:table !important; width:100% !important } table.body table.container .callout-inner.hide-for-large { display:table-cell !important; width:100% !important } table.body table.container .show-for-large { display:none !important; width:0; mso-hide:all; overflow:hidden } table.body img { width:auto; height:auto } table.body center { min-width:0 !important } table.body .container { width:95% !important } table.body .column, table.body .columns { height:auto !important; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box; } table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{ padding-left:8px !important;
			padding-right:8px !important
		} table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns { padding-left:0 !important; padding-right:0 !important } td.small-6, th.small-6, img.small-6 { display:inline-block !important; width:50% !important } img.small-12, td.small-12, th.small-12 { width:100% !important; display:inline-block !important; } .column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 { display:block !important; width:100% !important } img.sclbtn{ min-width:24px!important; min-height:24px!important; max-width:100px!important; } .mcnPreviewText{ display:none !important; } .ssc{ display:inline-block; margin:5px 0; } } </style> </head> <body class='body' style='-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important'> <table class='body' id='publicateemailcontainer' style='background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto'  class='float-center' align='center' valign='top' style='border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;'><table width='640' align='center' class='container float-center' style='background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto' style='padding:0'><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr><td width='100%' style='padding: 0; text-align:center'><img src='https://kassandah.gigmobility.com/static/media/kassandah.2b462a28.PNG' width="50%"/></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;'>  <tr>    <td>      <table border='0' cellspacing='0' cellpadding='0' align='center' >        <tr>          <td align='center' style='padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;' bgcolor='transparent'><h2 dir='auto' style='padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:bold;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;'><span>For some reason.. <br>you rejected a requisition</span></h2>			</td>        </tr>      </table>    </td>  </tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 18px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><strong>Hello $name$,</strong></div> <div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">&nbsp;</div> <div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">
		<p style="font-size: 18px;"><strong>You just rejected a requisition.<br><br>See ticket details below</strong></p>
		<table style="border: solid 1px grey; border-collapse: collapse; width: 100%;">
			<th style="border: solid 1px grey;">Ticket Description</thead>
			<th style="border: solid 1px grey;">Ticket Items</thead>
			<th style="border: solid 1px grey;">Due Date</thead>
			<tr style="border: solid 1px grey;"><td style="border: solid 1px grey;">$ticketDescription$</td><td style="border: solid 1px grey;">$ticketItems$</td><td style="border: solid 1px grey;">$dueDate$</td></tr>
		</table>
		</div><br><div style="font-size: 18px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><strong> You can view all your rejected tickets by clicking on the "Go to App" button below.
	    <p>Cheers.</p></strong>
		</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr><tr><td style='padding-left:8px;padding-right:8px;padding:0 8px 0 8px;'><div style='font-size: 14px !important; overflow: hidden;'><div style='text-align:center'><a class="go-to-app " href="https://kassandah.gigmobility.com/" rel="nofollow noopener"><strong>GO TO APP</strong></a></div></div></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:0px;padding-top:15px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:6px;padding-right:3px; width:300px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' align='center' valign='top' style='padding:0;text-align:center'>	</td> </tr> <tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr>	<tr> <td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'></td> </tr></table></th> </tr> </tbody> </table> </th> <th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:3px;padding-right:6px; width:300px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' align='center' valign='top' style='padding:0;text-align:center'>	</td> </tr> <tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr>	<tr> <td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;width:293px; margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span></span></div></td> </tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
														<tr>
<div style="background-color: #4E26AA; height: 200; font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><br><strong><span style="color: #ffffff;">Team KASSANDAH</span><br><span style="color: #ffffff;">(c) CopyRight 2020. All Rights
	Reserved</span><br><span style="color: #ffffff;"><em>Building a
		smarter workflow process</em></span></strong></div>														</tr>




			</tbody>
		</table>
	</th></tr>
        </tbody>

    </table>

        </body>
	</html>
`;

module.exports.verifyEmailHtml = `<html xmlns='http://www.w3.org/1999/xhtml'>

<head>
  <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' />
  <style>
    .body {
      background-color: #F9F9F9
    }

    .verify-button {
      color: #fff !important;
      text-transform: uppercase;
      text-decoration: none;
      background: #434343;
      padding: 20px;
      border-radius: 5px;
      display: inline-block;
      border: none;
      transition: all 0.4s ease 0s;
    }

    .verify-button:hover {
      background: #2ABF48;
      letter-spacing: 1px;
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
      transition: all 0.4s ease 0s;
    }

    a {
      color: inherit;
      text-decoration: none !important;
      text-decoration: none;
    }

    a.cta_button {
      color: #fff
    }

    @media screen and (max-width:560px) {
      .row {
        width: 100% !important;
        width: 100%;
      }

      .fi {
        font-size: 14px !important;
      }

      .ttl,
      .ttl a {
        font-size: 22px !important;
      }

      .dscr,
      .dscr p,
      .dscr span,
      .dscr div,
      .dscr .div {
        font-size: 18px !important;
        font-size: 18px;
      }

      .small-12 .dscr {
        width: 100%;
        width: 100% !important;
        min-width: 100%;
      }

      .small-float-center,
      .small-text-center {
        text-align: center !important;
      }

      .small-float-center {
        margin: 0 auto !important;
        float: none !important;
      }

      .small-text-left {
        text-align: left !important;
      }

      .small-text-right {
        text-align: right !important;
      }

      .hide-for-large {
        display: block !important;
        width: auto !important;
        overflow: visible !important;
        max-height: none !important;
        font-size: inherit !important;
        line-height: inherit !important
      }

      center {
        min-width: 0 !important;
      }

      table.container {
        width: 100% !important;
      }

      table.body table.container .hide-for-large,
      table.body table.container .row.hide-for-large {
        display: table !important;
        width: 100% !important
      }

      table.body table.container .callout-inner.hide-for-large {
        display: table-cell !important;
        width: 100% !important
      }

      table.body table.container .show-for-large {
        display: none !important;
        width: 0;
        mso-hide: all;
        overflow: hidden
      }

      table.body img {
        width: auto;
        height: auto
      }

      table.body center {
        min-width: 0 !important
      }

      table.body .container {
        width: 95% !important
      }

      table.body .column,
      table.body .columns {
        height: auto !important;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      table.body .columns.large-6,
      table.body .columns.large-4,
      table.body .columns.large-3 {
        padding-left: 8px !important;
        padding-right: 8px !important
      }

      table.body .collapse .column,
      table.body .collapse .columns,
      table.body .column .column,
      table.body .column .columns,
      table.body .columns .column,
      table.body .columns .columns {
        padding-left: 0 !important;
        padding-right: 0 !important
      }

      td.small-6,
      th.small-6,
      img.small-6 {
        display: inline-block !important;
        width: 50% !important
      }

      img.small-12,
      td.small-12,
      th.small-12 {
        width: 100% !important;
        display: inline-block !important;
      }

      .column td.small-12,
      .column th.small-12,
      .columns td.small-12,
      .columns th.small-12 {
        display: block !important;
        width: 100% !important
      }

      img.sclbtn {
        min-width: 24px !important;
        min-height: 24px !important;
        max-width: 100px !important;
      }

      .mcnPreviewText {
        display: none !important;
      }

      .ssc {
        display: inline-block;
        margin: 5px 0;
      }
    }
  </style>
</head>

<body class='body'
  style='-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important'>
  <table class='body' id='publicateemailcontainer'
    style='background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%'>
    <tbody>
      <tr style='padding:0;vertical-align:top'>
        <td dir='auto' class='float-center' align='center' valign='top'
          style='border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;'>
          <table width='640' align='center' class='container float-center'
            style='background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px'>
            <tbody>
              <tr style='padding:0;vertical-align:top'>
                <td dir='auto' style='padding:0'>
                  <table class='row' border='0' cellpadding='0' cellspacing='0'
                    style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
                    <tbody>
                      <tr style='padding:0;vertical-align:top' valign='top'>
                        <th dir='auto' class='small-12 large-12 columns'
                          style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px'
                          valign='top'>
                          <table
                            style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
                            <tbody>
                              <tr style='padding:0;vertical-align:top'>
                                <th dir='auto' align='left'
                                  style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'>
                                  <table bgcolor='transparent'
                                    style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%'
                                    width='100%' dir='auto'>
                                    <tr>
                                      <td width='100%' style='padding: 0; text-align:center'></td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]-->
                  <table class='row' border='0' cellpadding='0' cellspacing='0'
                    style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
                    <tbody>
                      <tr style='padding:0;vertical-align:top' valign='top'>
                        <th dir='auto' class='small-12 large-12 columns'
                          style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:564px'
                          valign='top'>
                          <table
                            style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
                            <tbody>
                              <tr style='padding:0;vertical-align:top'>
                                <th dir='auto' align='left'
                                  style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'>
                                  <table width='100%' border='0' cellspacing='0' cellpadding='0'
                                    style='border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;'>
                                    <tr>
                                      <td>
                                        <table border='0' cellspacing='0' cellpadding='0' align='center'>
                                          <tr>
                                            <td align='center'
                                              style='padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;'
                                              bgcolor='transparent'>
                                              <h2 dir='auto'
                                                style='padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:normal;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;'>
                                                <span><img src='https://kassandah.gigmobility.com/static/media/kassandah.2b462a28.PNG' width="50%" /></span></h2>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]-->
                  <table class='row' border='0' cellpadding='0' cellspacing='0'
                    style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
                    <tbody>
                      <tr style='padding:0;vertical-align:top' valign='top'>
                        <th dir='auto' class='small-12 large-12 columns'
                          style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:15px;padding-right:15px;width:564px'
                          valign='top'>
                          <table
                            style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
                            <tbody>
                              <tr style='padding:0;vertical-align:top'>
                                <th dir='auto' align='left'
                                  style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'>
                                  <table bgcolor='transparent'
                                    style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%'
                                    width='100%' dir='auto'>
                                    <tr>
                                      <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>
                                        &nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'>
                                        <div class='dscr'
                                          style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5; margin: 0 40px 0 40px'
                                          dir='auto'><span>
                                            <div
                                              style="font-size: 18px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><strong>
                                              Hello $name$,<br><br>Thank you for registering with Kassandah. <p> Please click the
                                              button below to validate your account. </p><br><br> <div class="button_cont" align-text="center"><a class="verify-button" href="$callback$"
                                                  rel="nofollow noopener">Verify Your Email</a></div> <br><br> </strong></div>
                                          </span></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style='font-size:1px; height:10px' height='10'></td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]-->
                  <table class='row' border='0' cellpadding='0' cellspacing='0'
                    style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
                    <tbody>
                      <tr style='padding:0;vertical-align:top' valign='top'>
                        <th dir='auto' class='small-12 large-12 columns'
                          style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px'
                          valign='top'>
                          <table
                            style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
                            <tbody>
                              <tr style='padding:0;vertical-align:top'>
                                <th dir='auto' align='left'
                                  style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'>
                                  <table bgcolor='transparent'
                                    style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%'
                                    width='100%' dir='auto'>
                                    <tr>
                                      <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>
                                        &nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'>
                                        <div class='dscr'
                                          style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;'
                                          dir='auto'><span>
                                            <div
                                              style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">
                                              <strong><span style="font-size: 10px;"><em></em></span></strong></div>
                                          </span></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style='font-size:1px; height:10px' height='10'></td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]-->
                  <table class='row' border='0' cellpadding='0' cellspacing='0'
                    style='border-collapse:collapse; background-color:#4546F5; background-image:url();background-position: 50% 0; background-size:cover; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
                    <tbody>
                      <tr style='padding:0;vertical-align:top' valign='top'>
                        <th dir='auto' class='small-12 large-12 columns'
                          style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:30px;padding-right:30px;width:564px'
                          valign='top'>
                          <table
                            style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
                            <tbody>
                              <tr style='padding:0;vertical-align:top'>
                                <th dir='auto' align='left'
                                  style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'>
                                  <table bgcolor='transparent'
                                    style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%'
                                    width='100%' dir='auto'>
                                    <tr>
                                      <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>
                                        &nbsp;</td>
                                    </tr>
                                    <tr>
                                      <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'>
                                        <div class='dscr'
                                          style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;'
                                          dir='auto'><span>
                                            <div
                                              style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">
                                              &nbsp;</div>
                                            <div
                                              style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><strong>
                                              <br><span
                                                style="color: #ffffff;">Team KASSANDAH</span><br><span style="color: #ffffff;">(c) CopyRight 2020. All Rights
                                                  Reserved</span><br><span style="color: #ffffff;"><em>Building a
                                                    smarter workflow process</em></span></strong></div>
                                            <div
                                              style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">
                                              &nbsp;</div>
                                          </span></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style='font-size:1px; height:10px' height='10'></td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]-->
                  <table class='row' border='0' cellpadding='0' cellspacing='0'
                    style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
                    <tbody>
                      <tr style='padding:0;vertical-align:top' valign='top'>
                        <th dir='auto' class='small-12 large-12 columns' style='margin:0 auto;padding:0;width:640px'
                          valign='top'>
                          <table
                            style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
                            <tbody>
                              <tr style='padding:0;vertical-align:top'>
                                <th dir='auto' align='left'
                                  style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'>
                                  <table class='spacer'
                                    style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'>
                                    <tbody>
                                      <tr style='padding:0;text-align:left;vertical-align:top'>
                                        <td height='16'
                                          style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>
                                          &nbsp;</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <p align='center' style='text-align: center'> <a target='_blank'
                                      style='text-decoration:none!important;outline:0!important;border:none!important;'
                                      href='https://publicate.it/?e=158970'> </a> </p>
                                  <table class='spacer'
                                    style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'>
                                    <tbody>
                                      <tr style='padding:0;text-align:left;vertical-align:top'>
                                        <td height='16'
                                          style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>
                                          &nbsp;</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
          <table width='100%'>
            <tr>
              <td width='100%' height='40'>
                <p>&nbsp;</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </tbody>
  </table><img src='' width='1' height='1'
    style='width:1px;height:1px;max-width:1px !important;max-height:1px !important;width:1px !important;height:1px !important;' />
</body>

</html>`;

module.exports.resetYourPasswordHtml = `

<html xmlns='http://www.w3.org/1999/xhtml'> <head> <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' /> <style> .body { background-color:#F9F9F9 } a { color:inherit;
  text-decoration:none !important;
  text-decoration:none; } a.cta_button { color:#fff } @media screen and (max-width:560px) { .row{ width:100%!important; width:100%; } .fi{ font-size:14px!important; } .ttl, .ttl a{ font-size:22px!important; } .dscr, .dscr p, .dscr span, .dscr div, .dscr .div{ font-size:18px !important; font-size:18px; } .small-12 .dscr{ width:100%; width:100%!important; min-width:100%; } .small-float-center, .small-text-center { text-align:center !important; } .small-float-center { margin:0 auto !important; float:none !important; } .small-text-left { text-align:left !important;
  } .small-text-right { text-align:right !important; } .hide-for-large { display:block !important; width:auto !important; overflow:visible !important; max-height:none !important; font-size:inherit !important; line-height:inherit !important } center{ min-width:0!important; } table.container{ width:100%!important; } table.body table.container .hide-for-large, table.body table.container .row.hide-for-large { display:table !important; width:100% !important } table.body table.container .callout-inner.hide-for-large { display:table-cell !important; width:100% !important } table.body table.container .show-for-large { display:none !important; width:0; mso-hide:all; overflow:hidden } table.body img { width:auto; height:auto } table.body center { min-width:0 !important } table.body .container { width:95% !important } table.body .column, table.body .columns { height:auto !important; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box; } table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{ padding-left:8px !important; padding-right:8px !important } table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns { padding-left:0 !important; padding-right:0 !important } td.small-6, th.small-6, img.small-6 { display:inline-block !important; width:50% !important } img.small-12, td.small-12, th.small-12 { width:100% !important; display:inline-block !important; } .column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 { display:block !important; width:100% !important } img.sclbtn{ min-width:24px!important; min-height:24px!important; max-width:100px!important; } .mcnPreviewText{ display:none !important; } .ssc{ display:inline-block; margin:5px 0; } } </style> </head> <body class='body' style='-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important'> <table class='body' id='publicateemailcontainer' style='background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto'  class='float-center' align='center' valign='top' style='border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;'><table width='640' align='center' class='container float-center' style='background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px'> <tbody>
       <tr style='padding:0;vertical-align:top'> <td dir='auto' style='padding:0'><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr><td width='100%' style='padding: 0; text-align:center'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;'>  <tr>    <td>      <table border='0' cellspacing='0' cellpadding='0' align='center' >        <tr>          <td align='center' style='padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;' bgcolor='transparent'><h2 dir='auto' style='padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:normal;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;'><span><strong> GIG PAYFLOW </strong></span></h2>			</td>        </tr>      </table>    </td>  </tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">Hello $name$,  <br><br>Please click on the following link to reset your password. <br><br> $callback$ <br><br>
                    If you did not request this, please ignore this email and your password will remain unchanged. </div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><strong><span style="font-size: 10px;"><em></em></span></strong></div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:#4546F5; background-image:url();background-position: 50% 0; background-size:cover; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:30px;padding-right:30px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div> <div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><span style="color: #ffffff;">(c) CopyRight 2020. All Rights Reserved</span><br><br><span style="color: #ffffff;"><em>Building a smarter payment process</em></span><br><br><span style="color: #ffffff;">Team GIG PAYFLOW</span></div> <div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
      </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;width:640px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'> <table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;text-align:left;vertical-align:top'> <td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td> </tr> </tbody> </table> <p align='center' style='text-align: center'> <a target='_blank' style='text-decoration:none!important;outline:0!important;border:none!important;' href='https://publicate.it/?e=158970'>  </a> </p> <table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;text-align:left;vertical-align:top'> <td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td> </tr> </tbody> </table> </th> </tr> </tbody> </table> </th> </tr>
  </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--></td> </tr> </tbody> </table>		<table width='100%'><tr><td width='100%' height='40'><p>&nbsp;</p></td></tr></table> </td> </tr> </tbody> </table><img src='' width='1' height='1' style='width:1px;height:1px;max-width:1px !important;max-height:1px !important;width:1px !important;height:1px !important;' /></body> </html>


`;