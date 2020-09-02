const config = require("config");

module.exports.RegisterationMail = `<html xmlns='http://www.w3.org/1999/xhtml'>
<head> <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' /> <style> .body { background-color:#F9F9F9 } a { color:inherit; text-decoration:none !important; text-decoration:none; } a.cta_button { color:#fff } @media screen and (max-width:560px) { .row{ width:100%!important; width:100%; } .fi{ font-size:14px!important; } .ttl, .ttl a{ font-size:22px!important; } .dscr, .dscr p, .dscr span, .dscr div, .dscr .div{ font-size:18px !important;
			font-size:18px;
		} .small-12 .dscr{ width:100%; width:100%!important; min-width:100%; } .small-float-center, .small-text-center { text-align:center !important; } .small-float-center { margin:0 auto !important; float:none !important; } .small-text-left { text-align:left !important; } .small-text-right { text-align:right !important; } .hide-for-large { display:block !important;
			width:auto !important; overflow:visible !important; max-height:none !important; font-size:inherit !important; line-height:inherit !important } center{ min-width:0!important; } table.container{ width:100%!important; } table.body table.container .hide-for-large, table.body table.container .row.hide-for-large { display:table !important; width:100% !important } table.body table.container .callout-inner.hide-for-large { display:table-cell !important; width:100% !important } table.body table.container .show-for-large { display:none !important; width:0; mso-hide:all; overflow:hidden } table.body img { width:auto; height:auto } table.body center { min-width:0 !important } table.body .container { width:95% !important } table.body .column, table.body .columns { height:auto !important; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box; } table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{ padding-left:8px !important; padding-right:8px !important } table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns { padding-left:0 !important;
			padding-right:0 !important
		} td.small-6, th.small-6, img.small-6 { display:inline-block !important; width:50% !important } img.small-12, td.small-12, th.small-12 { width:100% !important; display:inline-block !important; } .column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 { display:block !important; width:100% !important } img.sclbtn{ min-width:24px!important; min-height:24px!important; max-width:100px!important; } .mcnPreviewText{ display:none !important; } .ssc{ display:inline-block; margin:5px 0; } } </style> </head> <body class='body' style='-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important'> <table class='body' id='publicateemailcontainer' style='background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto'  class='float-center' align='center' valign='top' style='border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;'><table width='640' align='center' class='container float-center' style='background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto' style='padding:0'><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr><td width='100%' style='padding: 0; text-align:center'><img alt='' border='0' width='629' height='218' style='vertical-align:top; display:inline-block; border:none; outline:0; float:none; clear:both; text-decoration:none; width:629px; margin:0; ' src='https://pblc.it/i/951x308x9.f.S3/f6925/group-110-1558835-1.png' class='small-12 img629x218' /></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;'>  <tr>    <td>      <table border='0' cellspacing='0' cellpadding='0' align='center' >        <tr>          <td align='center' style='padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;' bgcolor='transparent'><h2 dir='auto' style='padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:normal;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;'><span><strong>Congratulations!</strong></span></h2>			</td>        </tr>      </table>    </td>  </tr></table></th>
				</tr>
			</tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:0px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">Dear $name$,<br><br>Your registration with the Road Transport Data Capture System (RTDC) was successful.<br>Your account has been approved and you can log in with the details below to begin your journey with RTDC.</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><strong>Find below credentials for your account:</strong><br><br>Username: $username$<br>Password: $password$</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">These details are unique and private to you, please do not share with anyone.</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr><tr><td style='padding-left:8px;padding-right:8px;padding:0 8px 0 8px;'><div style='font-size: 14px !important; overflow: hidden;'><div style='text-align:center'><a style='color:#bbbbbb; text-decoration:none; font-size:14px; color:#1B79E2; font-weight:bold; font-family: Helvetica, Arial, sans-serif;' href='https://r.pblc.it/c/161335206?alt_obj=cta&method=email&url=http%3A%2F%2Frtdc.com.ng' target='_blank'>Click here to Login</a></div></div></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">To log in or download the RTDC mobile application.</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr><tr><td style='padding-left:8px;padding-right:8px;padding:0 8px 0 8px;'><div style='font-size: 14px !important; overflow: hidden;'><div style='text-align:center'><a style='color:#bbbbbb; text-decoration:none; font-size:14px; color:#1B79E2; font-weight:bold; font-family: Helvetica, Arial, sans-serif;' href='' target='_blank'>(Link)</a></div></div></td></tr></table></th> </tr>
			</tbody>
		</table>
	</th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:0px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">If you require assistance please reach us via:</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:6px;padding-right:3px; width:300px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' align='center' valign='top' style='padding:0;text-align:center'><img alt='' border='0' width='312' height='188' style='vertical-align:top;display:inline-block;margin:0;border:none; outline:0; width:312px; ' src='https://pblc.it/i/600x361x9.f.S3/65e25/group-104-1559034-1.png' class='small-12 img312x188' />	</td> </tr> <tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr>	<tr> <td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;width:293px; margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">Email: support@rtdc.com.ng</div></span></div></td> </tr></table></th> </tr> </tbody> </table> </th> <th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:3px;padding-right:6px; width:300px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' align='center' valign='top' style='padding:0;text-align:center'><img alt='' border='0' width='312' height='188' style='vertical-align:top;display:inline-block;margin:0;border:none; outline:0; width:312px; ' src='https://pblc.it/i/600x361x9.f.S3/1e61a/group-105-1-1559036-1.png' class='small-12 img312x188' />	</td> </tr> <tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
											</tr>	<tr>
													<td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;width:293px; margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">Mobile: 08179999917</div></span></div></td>
										</tr></table></th>
				</tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><em><span style="font-size: 16px;"><strong>Building a Smarter Transport System</strong></span></em></div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:#3B915C; background-image:url(https://publicate.it/img/1000x0x9/f/RB/rtds-vector-3artboard-12x-11683.jpg);background-position: 50% 0; background-size:cover; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div>
<div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><span style="color: #ffffff;">For enquiries, queries or complaints and resolution, email or call our support team on support@rtdc.com.ng or 08179999917 and someone will be glad to respond to you quickly.</span><br><br><span style="color: #ffffff;">Thank you,</span><br><br><span style="color: #ffffff;">Team RTDC</span><br><span style="color: #ffffff;">&nbsp;</span><br><span style="color: #ffffff;">&nbsp;</span></div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
				</tr>
			</tbody>
		</table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;width:640px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'> <table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;text-align:left;vertical-align:top'> <td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td> </tr> </tbody> </table> <p align='center' style='text-align: center'> <a target='_blank' style='text-decoration:none!important;outline:0!important;border:none!important;' href='https://publicate.it/?e=158991'> <img width='150' height='21' style='border:none; outline:0; width:150px; margin:0 auto; vertical-align:middle!important;' alt='created in Publicate' src='https://publicate.it/imgs/created_in_publicate.gif' /> </a> </p> <table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;text-align:left;vertical-align:top'> <td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td> </tr> </tbody> </table> </th> </tr> </tbody> </table> </th> </tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--></td> </tr> </tbody> </table>		<table width='100%'><tr><td width='100%' height='40'><p>&nbsp;</p></td></tr></table> </td> </tr> </tbody> </table><img src='https://publicate.it/open/email/158991/pic.gif?1593162262' width='1' height='1' style='width:1px;height:1px;max-width:1px !important;max-height:1px !important;width:1px !important;height:1px !important;' /></body> </html> `;

module.exports.verifyotp = ` <html xmlns='http://www.w3.org/1999/xhtml'> <head> <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' /> <style> .body { background-color:#F9F9F9 } a { color:inherit;
		text-decoration:none !important;
		text-decoration:none; } a.cta_button { color:#fff } @media screen and (max-width:560px) { .row{ width:100%!important; width:100%; } .fi{ font-size:14px!important; } .ttl, .ttl a{ font-size:22px!important; } .dscr, .dscr p, .dscr span, .dscr div, .dscr .div{ font-size:18px !important; font-size:18px; } .small-12 .dscr{ width:100%; width:100%!important; min-width:100%; } .small-float-center, .small-text-center { text-align:center !important; } .small-float-center { margin:0 auto !important; float:none !important; } .small-text-left { text-align:left !important;
		} .small-text-right { text-align:right !important; } .hide-for-large { display:block !important; width:auto !important; overflow:visible !important; max-height:none !important; font-size:inherit !important; line-height:inherit !important } center{ min-width:0!important; } table.container{ width:100%!important; } table.body table.container .hide-for-large, table.body table.container .row.hide-for-large { display:table !important; width:100% !important } table.body table.container .callout-inner.hide-for-large { display:table-cell !important; width:100% !important } table.body table.container .show-for-large { display:none !important; width:0; mso-hide:all; overflow:hidden } table.body img { width:auto; height:auto } table.body center { min-width:0 !important } table.body .container { width:95% !important } table.body .column, table.body .columns { height:auto !important; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box; } table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{ padding-left:8px !important; padding-right:8px !important } table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns { padding-left:0 !important; padding-right:0 !important } td.small-6, th.small-6, img.small-6 { display:inline-block !important; width:50% !important } img.small-12, td.small-12, th.small-12 { width:100% !important; display:inline-block !important; } .column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 { display:block !important; width:100% !important } img.sclbtn{ min-width:24px!important; min-height:24px!important; max-width:100px!important; } .mcnPreviewText{ display:none !important; } .ssc{ display:inline-block; margin:5px 0; } } </style> </head> <body class='body' style='-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important'> <table class='body' id='publicateemailcontainer' style='background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto'  class='float-center' align='center' valign='top' style='border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;'><table width='640' align='center' class='container float-center' style='background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px'> <tbody>
         <tr style='padding:0;vertical-align:top'> <td dir='auto' style='padding:0'><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr><td width='100%' style='padding: 0; text-align:center'><img alt='' border='0' width='629' height='218' style='vertical-align:top; display:inline-block; border:none; outline:0; float:none; clear:both; text-decoration:none; width:629px; margin:0; ' src='https://pblc.it/i/951x308x9.f.S3/f6925/group-110-1558835-1.png' class='small-12 img629x218' /></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;'>  <tr>    <td>      <table border='0' cellspacing='0' cellpadding='0' align='center' >        <tr>          <td align='center' style='padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;' bgcolor='transparent'><h2 dir='auto' style='padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:normal;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;'><span><strong>One time password from RTDC</strong></span></h2>			</td>        </tr>      </table>    </td>  </tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">Hello $name$,<br><br>Thank you for registering with the Road Transport Data Capture System (RTDC). To complete the registration process, use $otp$ one time password (OTP) to validate your account.</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><strong><span style="font-size: 16px;"><em>Building a Smarter Transport System</em></span></strong></div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:#3B915C; background-image:url(https://publicate.it/img/1000x0x9/f/RB/rtds-vector-3artboard-12x-11678.jpg);background-position: 50% 0; background-size:cover; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:30px;padding-right:30px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div> <div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><span style="color: #ffffff;">For enquiries, queries or complaints and resolution, email or call our support team on support@rtdc.com.ng or 08179999917 and someone will be glad to respond to you quickly.</span><br><br><span style="color: #ffffff;">Thank you,</span><br><br><span style="color: #ffffff;">Team RTDC</span></div> <div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
				</tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;width:640px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'> <table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;text-align:left;vertical-align:top'> <td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td> </tr> </tbody> </table> <p align='center' style='text-align: center'> <a target='_blank' style='text-decoration:none!important;outline:0!important;border:none!important;' href='https://publicate.it/?e=158970'> <img width='150' height='21' style='border:none; outline:0; width:150px; margin:0 auto; vertical-align:middle!important;' alt='created in Publicate' src='https://publicate.it/imgs/created_in_publicate.gif' /> </a> </p> <table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;text-align:left;vertical-align:top'> <td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td> </tr> </tbody> </table> </th> </tr> </tbody> </table> </th> </tr>
		</tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--></td> </tr> </tbody> </table>		<table width='100%'><tr><td width='100%' height='40'><p>&nbsp;</p></td></tr></table> </td> </tr> </tbody> </table><img src='https://publicate.it/open/email/158970/pic.gif?1593161889' width='1' height='1' style='width:1px;height:1px;max-width:1px !important;max-height:1px !important;width:1px !important;height:1px !important;' /></body> </html>`;

module.exports.welcomeOnboard = `
 <html xmlns='http://www.w3.org/1999/xhtml'> <head> <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' /> <style> .body { background-color:#F9F9F9 } a { color:inherit; text-decoration:none !important; text-decoration:none; } a.cta_button { color:#fff } @media screen and (max-width:560px) { .row{ width:100%!important; width:100%; } .fi{ font-size:14px!important; } .ttl, .ttl a{ font-size:22px!important; } .dscr, .dscr p, .dscr span, .dscr div, .dscr .div{ font-size:18px !important; font-size:18px; } .small-12 .dscr{ width:100%; width:100%!important; min-width:100%; } .small-float-center, .small-text-center { text-align:center !important; } .small-float-center { margin:0 auto !important; float:none !important; } .small-text-left { text-align:left !important;
		}
		.small-text-right {
			text-align:right !important;
		}
		.hide-for-large {
			display:block !important;
			width:auto !important;
			overflow:visible !important;
			max-height:none !important;
			font-size:inherit !important;
			line-height:inherit !important
		}
		center{
			min-width:0!important;
		}
		table.container{
			width:100%!important;
		}
		table.body table.container .hide-for-large, table.body table.container .row.hide-for-large {
			display:table !important;
			width:100% !important
		}
		table.body table.container .callout-inner.hide-for-large {
			display:table-cell !important;
			width:100% !important
		}
		table.body table.container .show-for-large {
			display:none !important;
			width:0;
			mso-hide:all;
			overflow:hidden
		}
		table.body img {
			width:auto;
			height:auto
		}
		table.body center {
			min-width:0 !important
		}
		table.body .container {
			width:95% !important
		}
		table.body .column, table.body .columns {
			height:auto !important;
			-moz-box-sizing:border-box;
			-webkit-box-sizing:border-box;
			box-sizing:border-box;
		}
		table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{
			padding-left:8px !important;
			padding-right:8px !important
		}
		table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns {
			padding-left:0 !important;
			padding-right:0 !important
		}
		td.small-6, th.small-6, img.small-6 {
			display:inline-block !important;
			width:50% !important
		}
		img.small-12,
		td.small-12,
		th.small-12 {
			width:100% !important;
			display:inline-block !important;
		}
		.column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 {
			display:block !important;
			width:100% !important
		}
		img.sclbtn{
			min-width:24px!important;
			min-height:24px!important;
			max-width:100px!important;
		}
		.mcnPreviewText{
			display:none !important;
		}
		.ssc{
			display:inline-block;
			margin:5px 0;
		}
	}
	</style>
</head>
<body class='body' style='-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important'>
	
	<table class='body' id='publicateemailcontainer' style='background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%'>
		<tbody>
			<tr style='padding:0;vertical-align:top'>
				<td dir='auto'  class='float-center' align='center' valign='top' style='border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;'><table width='640' align='center' class='container float-center' style='background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px'>
      <tbody>
         <tr style='padding:0;vertical-align:top'>
            <td dir='auto' style='padding:0'><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr><td width='100%' style='padding: 0; text-align:center'><img alt='' border='0' width='629' height='218' style='vertical-align:top; display:inline-block; border:none; outline:0; float:none; clear:both; text-decoration:none; width:629px; margin:0; ' src='https://pblc.it/i/951x308x9.f.S3/f6925/group-110-1558835-1.png' class='small-12 img629x218' /></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;'>  <tr>    <td>      <table border='0' cellspacing='0' cellpadding='0' align='center' >        <tr>          <td align='center' style='padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;' bgcolor='transparent'><h2 dir='auto' style='padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:normal;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;'><span><strong>Congratulations!</strong></span></h2>			</td>        </tr>      </table>    </td>  </tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:15px;padding-right:15px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">Hello $name$,<br><br>Your account has been approved and we are excited to have you onboard this journey as we build smarter transport systems across Nigeria in partnership.</div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:6px;padding-right:3px; width:300px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
												<td width='100%' align='center' valign='top' style='padding:0;text-align:center'><img alt='' border='0' width='312' height='188' style='vertical-align:top;display:inline-block;margin:0;border:none; outline:0; width:312px; ' src='https://pblc.it/i/600x361x9.f.S3/f9254/group-101-1558856-1.png' class='small-12 img312x188' />	</td>
											</tr>
											<tr>
												<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
											</tr>	<tr>
													<td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;width:293px; margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">For frequently asked questions on<br>(operational or technical areas)</div></span></div></td>
										</tr><tr><td style='padding-left:8px;padding-right:8px;padding:0 8px 0 8px;'><div style='font-size: 14px !important; overflow: hidden;'><div style='text-align:center'><a style='color:#bbbbbb; text-decoration:none; font-size:14px; color:#3498db; font-weight:bold; font-family: Helvetica, Arial, sans-serif;' href='https://r.pblc.it/c/161289615?alt_obj=cta&method=email&url=http%3A%2F%2Frtdc.com.ng%2F' target='_blank'>Please Click Here</a></div></div></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th>
	<th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:3px;padding-right:6px; width:300px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
												<td width='100%' align='center' valign='top' style='padding:0;text-align:center'><img alt='' border='0' width='312' height='188' style='vertical-align:top;display:inline-block;margin:0;border:none; outline:0; width:312px; ' src='https://pblc.it/i/600x361x9.f.S3/e9c3a/group-101-1558864-1.png' class='small-12 img312x188' />	</td>
											</tr>
											<tr>
												<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
											</tr>	<tr>
													<td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;width:293px; margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">If you would like to know more about the RTDC system .</div></span></div></td>
										</tr><tr><td style='padding-left:8px;padding-right:8px;padding:0 8px 0 8px;'><div style='font-size: 14px !important; overflow: hidden;'><div style='text-align:center'><a style='color:#bbbbbb; text-decoration:none; font-size:14px; color:#1B79E2; font-weight:bold; font-family: Helvetica, Arial, sans-serif;' href='https://r.pblc.it/c/161289616?alt_obj=cta&method=email&url=http%3A%2F%2Frtdc.com.ng%2F' target='_blank'>Click here&nbsp;to watch this demo video</a></div></div></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr><td width='100%' style='padding: 0; text-align:center'><img alt='' border='0' width='614' height='201' style='vertical-align:top; display:inline-block; border:none; outline:0; float:none; clear:both; text-decoration:none; width:614px; margin:0; ' src='https://pblc.it/i/938x303x9.f.S3/8e714/group-103-1-1558871-1.png' class='small-12 img614x201' /></td></tr><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">We thought to include a number of electronic ticketing solution providers should you be in need of one or know someone who is.<br><br>Try any of the vendors below and thank us later.</div>
<ul>
<li style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">mopa.com</li>
<li style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">jaganda.com</li>
<li style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">yoda.com</li>
</ul><p style='display:none;'></p></span></div></td>
												</tr>
											</table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">To get started all you need is a smart device and Internet service. We have taken the time to make this experience very easy for you.</div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr><tr><td style='padding-left:8px;padding-right:8px;padding:0 8px 0 8px;'><div style='font-size: 14px !important; overflow: hidden;'><div style='text-align:left'><a style='color:#bbbbbb; text-decoration:none; font-size:14px; color:#1B79E2; font-weight:bold; font-family: Helvetica, Arial, sans-serif;' href='https://r.pblc.it/c/161298607?alt_obj=cta&method=email&url=http%3A%2F%2Frtdc.com.ng%2F' target='_blank'>Click here to navigate your account.</a></div></div></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><em><strong><span style="font-size: 16px;">Building a Smarter Transport System</span></strong></em></div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:#3B915C; background-image:url(https://publicate.it/img/1000x0x9/f/RB/rtds-vector-3artboard-12x-11679.jpg);background-position: 50% 0; background-size:cover; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><span style="color: #ffffff;">&nbsp;</span><br><span style="color: #ffffff;">For enquiries, queries or complaints and resolution, email or call our support team on support@rtdc.com.ng or 08179999917 and someone will be glad to respond to you quickly.</span><br><br><span style="color: #ffffff;">Thank you,</span><br><br><span style="color: #ffffff;">Team RTDC</span></div>
<div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div>
<div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
							
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;width:640px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'>
							
	<table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'>
		<tbody>
			<tr style='padding:0;text-align:left;vertical-align:top'>
				<td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td>
			</tr>
		</tbody>
	</table>
	
								<p align='center' style='text-align: center'>
								<a target='_blank' style='text-decoration:none!important;outline:0!important;border:none!important;' href='https://publicate.it/?e=158973'>
								<img width='150' height='21' style='border:none; outline:0; width:150px; margin:0 auto; vertical-align:middle!important;' alt='created in Publicate' src='https://publicate.it/imgs/created_in_publicate.gif' />
								</a>
								</p>
								
	<table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'>
		<tbody>
			<tr style='padding:0;text-align:left;vertical-align:top'>
				<td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td>
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
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--></td>
				</tr>
			</tbody>
		</table>		<table width='100%'><tr><td width='100%' height='40'><p>&nbsp;</p></td></tr></table>
					</td>
				</tr>
			</tbody>
		</table><img src='https://publicate.it/open/email/158973/pic.gif?1593161952' width='1' height='1' style='width:1px;height:1px;max-width:1px !important;max-height:1px !important;width:1px !important;height:1px !important;' /></body>
	</html>`;

module.exports.approvalEmail = `<html xmlns='http://www.w3.org/1999/xhtml'>
<head> <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' /> <style> .body { background-color:#F9F9F9 } a { color:inherit; text-decoration:none !important; text-decoration:none; } a.cta_button { color:#fff } @media screen and (max-width:560px) { .row{ width:100%!important; width:100%; } .fi{ font-size:14px!important; } .ttl, .ttl a{ font-size:22px!important; } .dscr, .dscr p, .dscr span, .dscr div, .dscr .div{ font-size:18px !important; font-size:18px; } .small-12 .dscr{ width:100%; width:100%!important; min-width:100%; } .small-float-center, .small-text-center { text-align:center !important; } .small-float-center { margin:0 auto !important; float:none !important; } .small-text-left { text-align:left !important; } .small-text-right { text-align:right !important; } .hide-for-large { display:block !important; width:auto !important; overflow:visible !important; max-height:none !important; font-size:inherit !important; line-height:inherit !important } center{ min-width:0!important; } table.container{ width:100%!important; } table.body table.container .hide-for-large, table.body table.container .row.hide-for-large { display:table !important; width:100% !important } table.body table.container .callout-inner.hide-for-large { display:table-cell !important; width:100% !important } table.body table.container .show-for-large { display:none !important; width:0; mso-hide:all; overflow:hidden } table.body img { width:auto; height:auto } table.body center { min-width:0 !important } table.body .container { width:95% !important } table.body .column, table.body .columns { height:auto !important; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box; } table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{ padding-left:8px !important;
			padding-right:8px !important
		} table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns { padding-left:0 !important; padding-right:0 !important } td.small-6, th.small-6, img.small-6 { display:inline-block !important; width:50% !important } img.small-12, td.small-12, th.small-12 { width:100% !important; display:inline-block !important; } .column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 { display:block !important; width:100% !important } img.sclbtn{ min-width:24px!important; min-height:24px!important; max-width:100px!important; } .mcnPreviewText{ display:none !important; } .ssc{ display:inline-block; margin:5px 0; } } </style> </head> <body class='body' style='-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important'> <table class='body' id='publicateemailcontainer' style='background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto'  class='float-center' align='center' valign='top' style='border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;'><table width='640' align='center' class='container float-center' style='background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto' style='padding:0'><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr><td width='100%' style='padding: 0; text-align:center'><img alt='' border='0' width='629' height='218' style='vertical-align:top; display:inline-block; border:none; outline:0; float:none; clear:both; text-decoration:none; width:629px; margin:0; ' src='https://pblc.it/i/951x308x9.f.S3/f6925/group-110-1558835-1.png' class='small-12 img629x218' /></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;'>  <tr>    <td>      <table border='0' cellspacing='0' cellpadding='0' align='center' >        <tr>          <td align='center' style='padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;' bgcolor='transparent'><h2 dir='auto' style='padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:bold;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;'><span>You are one step closer...</span></h2>			</td>        </tr>      </table>    </td>  </tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">Hello $name$,</div> <div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">&nbsp;</div> <div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">Your registration with the Road Transport Data Capture System (RTDC) was successful.<br>However, your account is pending, awaiting approval.</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;"><strong>Find below credentials for your account:</strong><br><br>Operator Code: $operatorCode$<br>Username: $username$<br>Password: $password$</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">These details are unique and private to you, please do not share with anyone.</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr><tr><td style='padding-left:8px;padding-right:8px;padding:0 8px 0 8px;'><div style='font-size: 14px !important; overflow: hidden;'><div style='text-align:center'><a style='color:#bbbbbb; text-decoration:none; font-size:14px; color:#1B79E2; font-weight:bold; font-family: Helvetica, Arial, sans-serif;' href='https://r.pblc.it/c/161313498?alt_obj=cta&method=email&url=http%3A%2F%2Frtdc.com.ng' target='_blank'>Click here&nbsp;to log in</a></div></div></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:0px;padding-top:15px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">If you require assistance please reach us via:</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:6px;padding-right:3px; width:300px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' align='center' valign='top' style='padding:0;text-align:center'><img alt='' border='0' width='312' height='188' style='vertical-align:top;display:inline-block;margin:0;border:none; outline:0; width:312px; ' src='https://pblc.it/i/600x361x9.f.S3/e4c87/group-104-1558954-1.png' class='small-12 img312x188' />	</td> </tr> <tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr>	<tr> <td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;width:293px; margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="text-align: center;">Email: support@rtdc.com.ng</div></span></div></td> </tr></table></th> </tr> </tbody> </table> </th> <th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:3px;padding-right:6px; width:300px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' align='center' valign='top' style='padding:0;text-align:center'><img alt='' border='0' width='312' height='188' style='vertical-align:top;display:inline-block;margin:0;border:none; outline:0; width:312px; ' src='https://pblc.it/i/600x361x9.f.S3/9dc60/group-105-1-1558968-1.png' class='small-12 img312x188' />	</td> </tr> <tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr>	<tr> <td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;width:293px; margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">Mobile: 08179999917</div></span></div></td> </tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><em><span style="font-size: 16px;"><strong>Building a Smarter Transport System</strong></span></em></div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:#3B915C; background-image:url(https://publicate.it/img/1000x0x9/f/RB/rtds-vector-3artboard-12x-11682.jpg);background-position: 50% 0; background-size:cover; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><span style="color: #ffffff;">&nbsp;</span><br><span style="color: #ffffff;">For enquiries, queries or complaints and resolution, email or call our support team on support@rtdc.com.ng or 08179999917 and someone will be glad to respond to you quickly.</span><br><br><span style="color: #ffffff;">Thank you,</span><br><br><span style="color: #ffffff;">Team RTDC</span></div>
<div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div>
<div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div>
<div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
							
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;width:640px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'>
							
	<table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'>
		<tbody>
			<tr style='padding:0;text-align:left;vertical-align:top'>
				<td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td>
			</tr>
		</tbody>
	</table>
	
								<p align='center' style='text-align: center'>
								<a target='_blank' style='text-decoration:none!important;outline:0!important;border:none!important;' href='https://publicate.it/?e=158983'>
								<img width='150' height='21' style='border:none; outline:0; width:150px; margin:0 auto; vertical-align:middle!important;' alt='created in Publicate' src='https://publicate.it/imgs/created_in_publicate.gif' />
								</a>
								</p>
								
	<table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'>
		<tbody>
			<tr style='padding:0;text-align:left;vertical-align:top'>
				<td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td>
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
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--></td>
				</tr>
			</tbody>
		</table>		<table width='100%'><tr><td width='100%' height='40'><p>&nbsp;</p></td></tr></table>
					</td>
				</tr>
			</tbody>
		</table><img src='https://publicate.it/open/email/158983/pic.gif?1593162018' width='1' height='1' style='width:1px;height:1px;max-width:1px !important;max-height:1px !important;width:1px !important;height:1px !important;' /></body>
	</html>`;

module.exports.rejectionMail = `

<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
	<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' />
	
	<style>
	.body {
		background-color:#F9F9F9
	}

	a {
		color:inherit;
		text-decoration:none !important;
		text-decoration:none;
	}

	a.cta_button {
		color:#fff
	}
	@media screen and (max-width:560px) {
		.row{
			width:100%!important;
			width:100%;
		}
		.fi{
			font-size:14px!important;
		}
		.ttl, .ttl a{
            font-size:22px!important;
        }
        .dscr, .dscr p, .dscr span, .dscr div, .dscr .div{
			font-size:18px !important;
			font-size:18px;
		}
		.small-12 .dscr{
			width:100%;
			width:100%!important;
			min-width:100%;
		}
		.small-float-center, .small-text-center {
			text-align:center !important;
		}
		.small-float-center {
			margin:0 auto !important;
			float:none !important;
		}
		.small-text-left {
			text-align:left !important;
		}
		.small-text-right {
			text-align:right !important;
		}
		.hide-for-large {
			display:block !important;
			width:auto !important;
			overflow:visible !important;
			max-height:none !important;
			font-size:inherit !important;
			line-height:inherit !important
		}
		center{
			min-width:0!important;
		}
		table.container{
			width:100%!important;
		}
		table.body table.container .hide-for-large, table.body table.container .row.hide-for-large {
			display:table !important;
			width:100% !important
		}
		table.body table.container .callout-inner.hide-for-large {
			display:table-cell !important;
			width:100% !important
		}
		table.body table.container .show-for-large {
			display:none !important;
			width:0;
			mso-hide:all;
			overflow:hidden
		}
		table.body img {
			width:auto;
			height:auto
		}
		table.body center {
			min-width:0 !important
		}
		table.body .container {
			width:95% !important
		}
		table.body .column, table.body .columns {
			height:auto !important;
			-moz-box-sizing:border-box;
			-webkit-box-sizing:border-box;
			box-sizing:border-box;
		}
		table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{
			padding-left:8px !important;
			padding-right:8px !important
		}
		table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns {
			padding-left:0 !important;
			padding-right:0 !important
		}
		td.small-6, th.small-6, img.small-6 {
			display:inline-block !important;
			width:50% !important
		}
		img.small-12,
		td.small-12,
		th.small-12 {
			width:100% !important;
			display:inline-block !important;
		}
		.column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 {
			display:block !important;
			width:100% !important
		}
		img.sclbtn{
			min-width:24px!important;
			min-height:24px!important;
			max-width:100px!important;
		}
		.mcnPreviewText{
			display:none !important;
		}
		.ssc{
			display:inline-block;
			margin:5px 0;
		}
	}
	</style>
</head>
<body class='body' style='-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important'>
	
	<table class='body' id='publicateemailcontainer' style='background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%'>
		<tbody>
			<tr style='padding:0;vertical-align:top'>
				<td dir='auto'  class='float-center' align='center' valign='top' style='border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;'><table width='640' align='center' class='container float-center' style='background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px'>
      <tbody>
         <tr style='padding:0;vertical-align:top'>
            <td dir='auto' style='padding:0'><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr><td width='100%' style='padding: 0; text-align:center'><img alt='' border='0' width='629' height='218' style='vertical-align:top; display:inline-block; border:none; outline:0; float:none; clear:both; text-decoration:none; width:629px; margin:0; ' src='https://pblc.it/i/951x308x9.f.S3/f6925/group-110-1558835-1.png' class='small-12 img629x218' /></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;'>  <tr>    <td>      <table border='0' cellspacing='0' cellpadding='0' align='center' >        <tr>          <td align='center' style='padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;' bgcolor='transparent'><h2 dir='auto' style='padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:normal;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;'><span><strong>Inaccurate Data Submitted</strong></span></h2>			</td>        </tr>      </table>    </td>  </tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:0px;padding-top:15px;padding-left:15px;padding-right:15px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">Hello $name$,</div>
<div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">&nbsp;</div>
<div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">This is to inform you that your account was not approved at the verification stage due to incomplete/accurate data provided. <br><br>Please provide us with accurate data to complete your account verification/approval process. <br><br>We look forward to receiving your documents soon.</div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:10px;padding-left:15px;padding-right:15px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">To Login,</div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr><tr><td style='padding-left:8px;padding-right:8px;padding:0 8px 0 8px;'><div style='font-size: 14px !important; overflow: hidden;'><div style='text-align:center'><a style='color:#bbbbbb; text-decoration:none; font-size:14px; color:#1B79E2; font-weight:bold; font-family: Helvetica, Arial, sans-serif;' href='https://r.pblc.it/c/161370165?alt_obj=cta&method=email&url=http%3A%2F%2Frtdc.com.ng' target='_blank'>Click here </a></div></div></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:0px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">If you require assistance please reach us via:</div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:6px;padding-right:3px; width:300px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
												<td width='100%' align='center' valign='top' style='padding:0;text-align:center'><img alt='' border='0' width='312' height='188' style='vertical-align:top;display:inline-block;margin:0;border:none; outline:0; width:312px; ' src='https://pblc.it/i/600x361x9.f.S3/65e25/group-104-1559034-1.png' class='small-12 img312x188' />	</td>
											</tr>
											<tr>
												<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
											</tr>	<tr>
													<td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;width:293px; margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">Email: support@rtdc.com.ng</div></span></div></td>
										</tr></table></th>
				</tr>
			</tbody>
		</table>
	</th>
	<th dir='auto' class='small-12 large-6 columns' style='margin:0 auto;margin:0 auto;padding:0;padding-bottom:15px;padding-top:0px;padding-left:3px;padding-right:6px; width:300px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
												<td width='100%' align='center' valign='top' style='padding:0;text-align:center'><img alt='' border='0' width='312' height='188' style='vertical-align:top;display:inline-block;margin:0;border:none; outline:0; width:312px; ' src='https://pblc.it/i/600x361x9.f.S3/1e61a/group-105-1-1559036-1.png' class='small-12 img312x188' />	</td>
											</tr>
											<tr>
												<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
											</tr>	<tr>
													<td style='padding:0 8px 0 8px; padding-bottom:10px; ' dir='auto'><div class='dscr' style='color:#555555;width:293px; margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">Mobile: 08179999917</div></span></div></td>
										</tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><span style="font-size: 16px;"><em><strong>Building a Smarter Transport System</strong></em></span></div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:#3B915C; background-image:url(https://publicate.it/img/1000x0x9/f/RB/rtds-vector-3artboard-12x-11687.jpg);background-position: 50% 0; background-size:cover; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr>
															<td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td>
														</tr>
												<tr>
													<td style='padding:0 8px 0 8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><span style="color: #ffffff;">&nbsp;</span><br><span style="color: #ffffff;">For enquiries, queries or complaints and resolution, email or call our support team on support@rtdc.com.ng or 08179999917 and someone will be glad to respond to you quickly.</span><br><br><span style="color: #ffffff;">Thank you,</span><br><br><span style="color: #ffffff;">Team RTDC</span><br><span style="color: #ffffff;">&nbsp;</span><br><span style="color: #ffffff;">&nbsp;</span></div></span></div></td>
												</tr>
											<tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
				</tr>
			</tbody>
		</table>
	</th></tr>
		</tbody>
	</table>
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'>
		<tbody>
			<tr style='padding:0;vertical-align:top' valign='top'>
							
	<th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;width:640px' valign='top'>
		<table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'>
			<tbody>
				<tr style='padding:0;vertical-align:top'>
					<th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'>
							
	<table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'>
		<tbody>
			<tr style='padding:0;text-align:left;vertical-align:top'>
				<td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td>
			</tr>
		</tbody>
	</table>
	
								<p align='center' style='text-align: center'>
								<a target='_blank' style='text-decoration:none!important;outline:0!important;border:none!important;' href='https://publicate.it/?e=159008'>
								<img width='150' height='21' style='border:none; outline:0; width:150px; margin:0 auto; vertical-align:middle!important;' alt='created in Publicate' src='https://publicate.it/imgs/created_in_publicate.gif' />
								</a>
								</p>
								
	<table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'>
		<tbody>
			<tr style='padding:0;text-align:left;vertical-align:top'>
				<td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td>
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
	<!--[if (gte mso 9)|(IE)]>
		</td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'>
	<![endif]--></td>
				</tr>
			</tbody>
		</table>		<table width='100%'><tr><td width='100%' height='40'><p>&nbsp;</p></td></tr></table>
					</td>
				</tr>
			</tbody>
		</table><img src='https://publicate.it/open/email/159008/pic.gif?1593165202' width='1' height='1' style='width:1px;height:1px;max-width:1px !important;max-height:1px !important;width:1px !important;height:1px !important;' /></body>
	</html>`;

module.exports.verifyEmailHtml = `

<html xmlns='http://www.w3.org/1999/xhtml'> <head> <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' /> <style> .body { background-color:#F9F9F9 } a { color:inherit;
  text-decoration:none !important;
  text-decoration:none; } a.cta_button { color:#fff } @media screen and (max-width:560px) { .row{ width:100%!important; width:100%; } .fi{ font-size:14px!important; } .ttl, .ttl a{ font-size:22px!important; } .dscr, .dscr p, .dscr span, .dscr div, .dscr .div{ font-size:18px !important; font-size:18px; } .small-12 .dscr{ width:100%; width:100%!important; min-width:100%; } .small-float-center, .small-text-center { text-align:center !important; } .small-float-center { margin:0 auto !important; float:none !important; } .small-text-left { text-align:left !important;
  } .small-text-right { text-align:right !important; } .hide-for-large { display:block !important; width:auto !important; overflow:visible !important; max-height:none !important; font-size:inherit !important; line-height:inherit !important } center{ min-width:0!important; } table.container{ width:100%!important; } table.body table.container .hide-for-large, table.body table.container .row.hide-for-large { display:table !important; width:100% !important } table.body table.container .callout-inner.hide-for-large { display:table-cell !important; width:100% !important } table.body table.container .show-for-large { display:none !important; width:0; mso-hide:all; overflow:hidden } table.body img { width:auto; height:auto } table.body center { min-width:0 !important } table.body .container { width:95% !important } table.body .column, table.body .columns { height:auto !important; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; box-sizing:border-box; } table.body .columns.large-6, table.body .columns.large-4, table.body .columns.large-3{ padding-left:8px !important; padding-right:8px !important } table.body .collapse .column, table.body .collapse .columns, table.body .column .column, table.body .column .columns, table.body .columns .column, table.body .columns .columns { padding-left:0 !important; padding-right:0 !important } td.small-6, th.small-6, img.small-6 { display:inline-block !important; width:50% !important } img.small-12, td.small-12, th.small-12 { width:100% !important; display:inline-block !important; } .column td.small-12, .column th.small-12, .columns td.small-12, .columns th.small-12 { display:block !important; width:100% !important } img.sclbtn{ min-width:24px!important; min-height:24px!important; max-width:100px!important; } .mcnPreviewText{ display:none !important; } .ssc{ display:inline-block; margin:5px 0; } } </style> </head> <body class='body' style='-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;background:#F9F9F9!important;box-sizing:border-box;font-size:1px;margin:0;min-width:100%;padding:0;width:100%!important'> <table class='body' id='publicateemailcontainer' style='background:#F9F9F9!important;background-color:#F9F9F9;border-collapse:collapse;border-spacing:0;font-size:1px;height:100%;line-height:0;margin:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <td dir='auto'  class='float-center' align='center' valign='top' style='border-collapse:collapse!important;float:none;font-size:1px;line-height:0;margin:0 auto;padding:0;text-align:center;vertical-align:top;word-wrap:break-word;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;hyphens:none;'><table width='640' align='center' class='container float-center' style='background:#FFFFFF;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px'> <tbody>
       <tr style='padding:0;vertical-align:top'> <td dir='auto' style='padding:0'><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr><td width='100%' style='padding: 0; text-align:center'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:0px;padding-right:0px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:#555555;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-collapse:collapse;border-spacing:0;display:table;padding:0;margin:0;width:100%;'>  <tr>    <td>      <table border='0' cellspacing='0' cellpadding='0' align='center' >        <tr>          <td align='center' style='padding:10px 7px; line-height:1.2!important;text-align:center; border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;' bgcolor='transparent'><h2 dir='auto' style='padding: 0; margin: 0!important;line-height: 1.2;display:inline-block;width:auto;border:transparent 1px solid;text-align:center;font-weight:normal;font-style:normal;color:#555555;font-size:32px;background-color:transparent;border-radius:0px; -webkit-border-radius: 0px; -moz-border-radius: 0px;font-family: helvetica,arial,verdana,sans-serif;vertical-align: top;'><span><strong> GIG PAYFLOW </strong></span></h2>			</td>        </tr>      </table>    </td>  </tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:15px;padding-right:15px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica,arial,verdana,sans-serif; color: inherit;">Hello $name$,<br><br>Thank you for registering with GIG PayFlow. Click the link below to validate your account. <br><br> $otp$ <br><br> </div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:6px;padding-right:6px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><strong><span style="font-size: 10px;"><em></em></span></strong></div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th> </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:#4546F5; background-image:url();background-position: 50% 0; background-size:cover; mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;padding-bottom:15px;padding-top:15px;padding-left:30px;padding-right:30px;width:564px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'><table bgcolor='transparent' style='background-color: transparent;border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%' width='100%' dir='auto'><tr> <td width='100%' height='5' style='font-size:1px; line-height:5px;height:5px;'>&nbsp;</td> </tr> <tr> <td style='padding:0 8px 0 8px;padding-left:8px;padding-right:8px;' dir='auto'><div class='dscr' style='color:#555555;margin:0;font-family: helvetica,arial,verdana,sans-serif; font-size: 14px; font-weight:300; line-height: 1.5;' dir='auto'><span><div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div> <div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;"><span style="color: #ffffff;">(c) CopyRight 2020. All Rights Reserved</span><br><br><span style="color: #ffffff;"><em>Building a smarter payment process</em></span><br><br><span style="color: #ffffff;">Team GIG PAYFLOW</span></div> <div style="font-size: 14px; font-family: helvetica, arial, verdana, sans-serif; color: inherit; text-align: center;">&nbsp;</div></span></div></td> </tr> <tr><td style='font-size:1px; height:10px' height='10'></td></tr></table></th>
      </tr> </tbody> </table> </th></tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--><table class='row' border='0' cellpadding='0' cellspacing='0' style='border-collapse:collapse; background-color:transparent;  mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0;display:table;padding:0;position:relative;vertical-align:top;width:100%;margin:0;'> <tbody> <tr style='padding:0;vertical-align:top' valign='top'> <th dir='auto'  class='small-12 large-12 columns' style='margin:0 auto;padding:0;width:640px' valign='top'> <table style='border-collapse:collapse;border-spacing:0;padding:0;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;vertical-align:top'> <th dir='auto' align='left' style='padding:0;background-color:transparent;color:inherit;font-family:helvetica,arial,verdana,sans-serif;font-size:17px;font-weight:normal;line-height:1.5;margin:0;'> <table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;text-align:left;vertical-align:top'> <td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td> </tr> </tbody> </table> <p align='center' style='text-align: center'> <a target='_blank' style='text-decoration:none!important;outline:0!important;border:none!important;' href='https://publicate.it/?e=158970'>  </a> </p> <table class='spacer' style='border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%'> <tbody> <tr style='padding:0;text-align:left;vertical-align:top'> <td height='16' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;margin:0;mso-line-height-rule:exactly;padding:0;vertical-align:top;'>&nbsp;</td> </tr> </tbody> </table> </th> </tr> </tbody> </table> </th> </tr>
  </tbody> </table> <!--[if (gte mso 9)|(IE)]> </td></tr><tr style='padding:0;vertical-align:top'><td dir='auto' style='-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:inherit;font-family:inherit;font-size:1px;font-weight:normal;hyphens:auto;line-height:0;margin:0;padding:0;vertical-align:top;word-wrap:break-word'> <![endif]--></td> </tr> </tbody> </table>		<table width='100%'><tr><td width='100%' height='40'><p>&nbsp;</p></td></tr></table> </td> </tr> </tbody> </table><img src='' width='1' height='1' style='width:1px;height:1px;max-width:1px !important;max-height:1px !important;width:1px !important;height:1px !important;' /></body> </html>


`;