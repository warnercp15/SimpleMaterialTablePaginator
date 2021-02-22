import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator} from '@angular/material';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

	listData=[{"id":1,"first_name":"Gary","last_name":"Ortiz","email":"gortiz0@mapy.cz","country":"Indonesia","modified":"2015-05-16","vip":false},
	{"id":2,"first_name":"Albert","last_name":"Williamson","email":"awilliamson1@narod.ru","country":"China","modified":"2015-03-11","vip":true},
	{"id":3,"first_name":"Mildred","last_name":"Fuller","email":"mfuller2@npr.org","country":"Peru","modified":"2015-02-15","vip":true},
	{"id":4,"first_name":"Russell","last_name":"Robinson","email":"rrobinson3@google.pl","country":"Belarus","modified":"2014-10-31","vip":false},
	{"id":5,"first_name":"Laura","last_name":"Harper","email":"lharper4@boston.com","country":"Philippines","modified":"2015-01-14","vip":false},
	{"id":6,"first_name":"Larry","last_name":"Sanders","email":"lsanders5@cornell.edu","country":"China","modified":"2015-01-11","vip":false},
	{"id":7,"first_name":"Michael","last_name":"Rice","email":"mrice6@geocities.jp","country":"Philippines","modified":"2014-12-06","vip":true},
	{"id":8,"first_name":"Sara","last_name":"Harris","email":"sharris7@deliciousdays.com","country":"Indonesia","modified":"2014-11-05","vip":true},
	{"id":9,"first_name":"Phyllis","last_name":"Webb","email":"pwebb8@reddit.com","country":"China","modified":"2015-04-02","vip":true},
	{"id":10,"first_name":"Roger","last_name":"Alvarez","email":"ralvarez9@nsw.gov.au","country":"Finland","modified":"2015-03-21","vip":true},
	{"id":11,"first_name":"Maria","last_name":"Carpenter","email":"mcarpentera@so-net.ne.jp","country":"Sweden","modified":"2015-08-18","vip":true},
	{"id":12,"first_name":"Lori","last_name":"Edwards","email":"ledwardsb@storify.com","country":"Russia","modified":"2015-02-05","vip":true},
	{"id":13,"first_name":"Phillip","last_name":"Mitchell","email":"pmitchellc@ebay.co.uk","country":"Russia","modified":"2015-03-28","vip":false},
	{"id":14,"first_name":"Craig","last_name":"Lopez","email":"clopezd@hexun.com","country":"Indonesia","modified":"2015-01-20","vip":true},
	{"id":15,"first_name":"Marie","last_name":"George","email":"mgeorgee@squarespace.com","country":"Mauritius","modified":"2014-10-26","vip":true},
	{"id":16,"first_name":"Jean","last_name":"Duncan","email":"jduncanf@pbs.org","country":"Norway","modified":"2014-11-19","vip":true},
	{"id":17,"first_name":"Kimberly","last_name":"Butler","email":"kbutlerg@wix.com","country":"Sweden","modified":"2014-12-29","vip":false},
	{"id":18,"first_name":"Heather","last_name":"Ramirez","email":"hramirezh@instagram.com","country":"Indonesia","modified":"2015-07-13","vip":false},
	{"id":19,"first_name":"Jason","last_name":"Sanders","email":"jsandersi@earthlink.net","country":"Canada","modified":"2015-02-25","vip":false},
	{"id":20,"first_name":"Juan","last_name":"Evans","email":"jevansj@google.de","country":"Philippines","modified":"2015-07-09","vip":true},
	{"id":21,"first_name":"Billy","last_name":"Tucker","email":"btuckerk@businessweek.com","country":"Indonesia","modified":"2015-02-08","vip":false},
	{"id":22,"first_name":"Fred","last_name":"Duncan","email":"fduncanl@smugmug.com","country":"Brazil","modified":"2015-03-05","vip":true},
	{"id":23,"first_name":"Daniel","last_name":"Peterson","email":"dpetersonm@deliciousdays.com","country":"Nigeria","modified":"2014-10-08","vip":false},
	{"id":24,"first_name":"Kelly","last_name":"Gilbert","email":"kgilbertn@guardian.co.uk","country":"Mexico","modified":"2014-12-29","vip":false},
	{"id":25,"first_name":"Aaron","last_name":"Hart","email":"aharto@oakley.com","country":"Russia","modified":"2015-08-01","vip":false},
	{"id":26,"first_name":"Phillip","last_name":"Cook","email":"pcookp@i2i.jp","country":"China","modified":"2014-09-12","vip":true},
	{"id":27,"first_name":"Sara","last_name":"Perry","email":"sperryq@examiner.com","country":"Czech Republic","modified":"2015-02-15","vip":false},
	{"id":28,"first_name":"Karen","last_name":"Fields","email":"kfieldsr@home.pl","country":"Iran","modified":"2015-04-18","vip":false},
	{"id":29,"first_name":"Nancy","last_name":"Schmidt","email":"nschmidts@sogou.com","country":"Venezuela","modified":"2014-12-09","vip":true},
	{"id":30,"first_name":"Theresa","last_name":"Chavez","email":"tchavezt@smh.com.au","country":"Czech Republic","modified":"2015-01-07","vip":true},
	{"id":31,"first_name":"Howard","last_name":"Crawford","email":"hcrawfordu@list-manage.com","country":"Brazil","modified":"2015-03-17","vip":false},
	{"id":32,"first_name":"Catherine","last_name":"Johnson","email":"cjohnsonv@bandcamp.com","country":"Canada","modified":"2014-09-05","vip":true},
	{"id":33,"first_name":"Nicholas","last_name":"Morales","email":"nmoralesw@deviantart.com","country":"Canada","modified":"2015-04-01","vip":false},
	{"id":34,"first_name":"Chris","last_name":"Morales","email":"cmoralesx@ow.ly","country":"China","modified":"2015-03-05","vip":true},
	{"id":35,"first_name":"Mildred","last_name":"Frazier","email":"mfraziery@theglobeandmail.com","country":"Pakistan","modified":"2014-11-12","vip":true},
	{"id":36,"first_name":"Mark","last_name":"Harper","email":"mharperz@weebly.com","country":"Botswana","modified":"2015-05-31","vip":false},
	{"id":37,"first_name":"Michael","last_name":"Ryan","email":"mryan10@si.edu","country":"South Africa","modified":"2014-12-14","vip":true},
	{"id":38,"first_name":"Matthew","last_name":"Ruiz","email":"mruiz11@clickbank.net","country":"Oman","modified":"2015-06-19","vip":true},
	{"id":39,"first_name":"Jose","last_name":"Morales","email":"jmorales12@dedecms.com","country":"Palestinian Territory","modified":"2014-09-29","vip":true},
	{"id":40,"first_name":"Scott","last_name":"Simpson","email":"ssimpson13@weather.com","country":"Ukraine","modified":"2014-10-18","vip":true},
	{"id":41,"first_name":"Pamela","last_name":"Welch","email":"pwelch14@phpbb.com","country":"Brazil","modified":"2014-10-26","vip":false},
	{"id":42,"first_name":"Ruth","last_name":"Mcdonald","email":"rmcdonald15@discovery.com","country":"Indonesia","modified":"2015-04-18","vip":false},
	{"id":43,"first_name":"Kevin","last_name":"Fields","email":"kfields16@businesswire.com","country":"Indonesia","modified":"2014-09-10","vip":true},
	{"id":44,"first_name":"Justin","last_name":"Kim","email":"jkim17@xinhuanet.com","country":"Finland","modified":"2015-01-24","vip":true},
	{"id":45,"first_name":"Wanda","last_name":"Jones","email":"wjones18@jigsy.com","country":"Philippines","modified":"2014-08-23","vip":true},
	{"id":46,"first_name":"Jose","last_name":"Carter","email":"jcarter19@mlb.com","country":"China","modified":"2015-02-06","vip":false},
	{"id":47,"first_name":"Joe","last_name":"Gonzales","email":"jgonzales1a@google.ru","country":"China","modified":"2014-12-12","vip":true},
	{"id":48,"first_name":"Martin","last_name":"Thompson","email":"mthompson1b@acquirethisname.com","country":"China","modified":"2015-06-16","vip":true},
	{"id":49,"first_name":"Phillip","last_name":"Hayes","email":"phayes1c@alexa.com","country":"Dominican Republic","modified":"2015-01-03","vip":true},
	{"id":50,"first_name":"Angela","last_name":"Shaw","email":"ashaw1d@bigcartel.com","country":"Malaysia","modified":"2014-10-20","vip":true},
	{"id":51,"first_name":"Jimmy","last_name":"Garza","email":"jgarza1e@stumbleupon.com","country":"China","modified":"2015-01-18","vip":true},
	{"id":52,"first_name":"Doris","last_name":"Cook","email":"dcook1f@cocolog-nifty.com","country":"Canada","modified":"2015-04-07","vip":false},
	{"id":53,"first_name":"Nancy","last_name":"Thompson","email":"nthompson1g@seesaa.net","country":"Russia","modified":"2015-01-04","vip":true},
	{"id":54,"first_name":"Sarah","last_name":"Stanley","email":"sstanley1h@google.ru","country":"Poland","modified":"2015-06-13","vip":false},
	{"id":55,"first_name":"Douglas","last_name":"Gardner","email":"dgardner1i@jugem.jp","country":"China","modified":"2014-10-22","vip":true},
	{"id":56,"first_name":"Mark","last_name":"Thomas","email":"mthomas1j@deviantart.com","country":"Ireland","modified":"2015-05-27","vip":false},
	{"id":57,"first_name":"Judith","last_name":"Jenkins","email":"jjenkins1k@nps.gov","country":"China","modified":"2014-09-30","vip":true},
	{"id":58,"first_name":"Henry","last_name":"Ross","email":"hross1l@chicagotribune.com","country":"Botswana","modified":"2015-06-02","vip":false},
	{"id":59,"first_name":"Kimberly","last_name":"Gomez","email":"kgomez1m@blog.com","country":"Mexico","modified":"2015-01-05","vip":false},
	{"id":60,"first_name":"Pamela","last_name":"Nelson","email":"pnelson1n@marketwatch.com","country":"Mexico","modified":"2014-11-06","vip":false},
	{"id":61,"first_name":"Elizabeth","last_name":"Sanchez","email":"esanchez1o@artisteer.com","country":"Portugal","modified":"2015-03-16","vip":true},
	{"id":62,"first_name":"Charles","last_name":"Fuller","email":"cfuller1p@google.com.hk","country":"Philippines","modified":"2015-02-16","vip":false},
	{"id":63,"first_name":"Andrew","last_name":"Stewart","email":"astewart1q@nature.com","country":"Portugal","modified":"2014-11-02","vip":false},
	{"id":64,"first_name":"Maria","last_name":"Kennedy","email":"mkennedy1r@economist.com","country":"China","modified":"2015-08-03","vip":true},
	{"id":65,"first_name":"Clarence","last_name":"Ferguson","email":"cferguson1s@gnu.org","country":"Colombia","modified":"2014-10-08","vip":true},
	{"id":66,"first_name":"Annie","last_name":"Campbell","email":"acampbell1t@alexa.com","country":"Tunisia","modified":"2015-01-05","vip":true},
	{"id":67,"first_name":"Jeremy","last_name":"Wilson","email":"jwilson1u@ca.gov","country":"Indonesia","modified":"2014-11-01","vip":false},
	{"id":68,"first_name":"Jeremy","last_name":"Ward","email":"jward1v@dmoz.org","country":"Indonesia","modified":"2014-11-16","vip":true},
	{"id":69,"first_name":"Peter","last_name":"Brown","email":"pbrown1w@liveinternet.ru","country":"Sweden","modified":"2015-01-08","vip":true},
	{"id":70,"first_name":"Laura","last_name":"Stewart","email":"lstewart1x@google.it","country":"Russia","modified":"2015-04-23","vip":true},
	{"id":71,"first_name":"Christina","last_name":"Montgomery","email":"cmontgomery1y@free.fr","country":"Zimbabwe","modified":"2015-06-02","vip":true},
	{"id":72,"first_name":"Amy","last_name":"Bishop","email":"abishop1z@exblog.jp","country":"China","modified":"2014-12-13","vip":true},
	{"id":73,"first_name":"Jeffrey","last_name":"Pierce","email":"jpierce20@usnews.com","country":"France","modified":"2014-11-05","vip":false},
	{"id":74,"first_name":"Virginia","last_name":"Welch","email":"vwelch21@wunderground.com","country":"Philippines","modified":"2014-10-24","vip":false},
	{"id":75,"first_name":"Beverly","last_name":"Lane","email":"blane22@amazon.com","country":"Poland","modified":"2014-09-01","vip":false},
	{"id":76,"first_name":"Norma","last_name":"Howard","email":"nhoward23@imgur.com","country":"Venezuela","modified":"2015-07-24","vip":false},
	{"id":77,"first_name":"Margaret","last_name":"Kelley","email":"mkelley24@imageshack.us","country":"China","modified":"2015-02-22","vip":false},
	{"id":78,"first_name":"Brenda","last_name":"Miller","email":"bmiller25@technorati.com","country":"Canada","modified":"2015-04-15","vip":false},
	{"id":79,"first_name":"Catherine","last_name":"White","email":"cwhite26@google.ru","country":"France","modified":"2015-05-01","vip":false},
	{"id":80,"first_name":"Mary","last_name":"Berry","email":"mberry27@freewebs.com","country":"Russia","modified":"2014-11-27","vip":true},
	{"id":81,"first_name":"Sarah","last_name":"Young","email":"syoung28@digg.com","country":"China","modified":"2015-05-12","vip":true},
	{"id":82,"first_name":"Craig","last_name":"Moreno","email":"cmoreno29@paypal.com","country":"Greece","modified":"2015-05-12","vip":true},
	{"id":83,"first_name":"Louise","last_name":"Fisher","email":"lfisher2a@github.com","country":"Indonesia","modified":"2014-09-10","vip":true},
	{"id":84,"first_name":"Carol","last_name":"Ray","email":"cray2b@wp.com","country":"Saudi Arabia","modified":"2015-04-10","vip":true},
	{"id":85,"first_name":"Sean","last_name":"Bishop","email":"sbishop2c@geocities.com","country":"France","modified":"2014-10-22","vip":true},
	{"id":86,"first_name":"Joseph","last_name":"Weaver","email":"jweaver2d@nature.com","country":"Portugal","modified":"2015-02-17","vip":true},
	{"id":87,"first_name":"Louise","last_name":"Ramos","email":"lramos2e@mit.edu","country":"Macedonia","modified":"2015-08-14","vip":false},
	{"id":88,"first_name":"Brian","last_name":"Carpenter","email":"bcarpenter2f@eepurl.com","country":"Indonesia","modified":"2015-02-23","vip":true}];

    @ViewChild(MatPaginator) paginator:MatPaginator;

	displayedColumns: string[] = ['id', 'first_name', 'last_name','country','email','modified','vip'];
    dataSource=new MatTableDataSource(this.listData);
    listDataCopy=[...this.listData];
	constructor() { }
    
	ngOnInit() {
        this.setDataPaginator();
	}

    setDataPaginator(){
        const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
            if (length == 0 || pageSize == 0) { return `0 van ${length};` }
            
            length = Math.max(length, 0);
          
            const startIndex = page * pageSize;
          
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            const endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
          
            return `${startIndex + 1} - ${endIndex} de ${length}`;
        }

        this.paginator._intl.itemsPerPageLabel = 'Elementos por página:';
        this.paginator._intl.nextPageLabel = 'Siguiente página';
        this.paginator._intl.previousPageLabel = 'Anterior página';
        this.paginator._intl.firstPageLabel = 'Primera página';
        this.paginator._intl.lastPageLabel = 'Ultima página';
        this.paginator._intl.getRangeLabel = dutchRangeLabel;
        this.dataSource.paginator=this.paginator;
    }

    filterVIP(isVIP:boolean){
        this.listData=[...this.listDataCopy];
        isVIP?this.listData=this.listData.filter(person=>person.vip)
        :this.listData=this.listData.filter(person=>!person.vip);
        this.setData();
    }

    clearFilter(){
        this.listData=[...this.listDataCopy];
        this.setData();
        let radioButtons=document.getElementsByTagName('mat-radio-button');
        let listaRadios=Array.from(radioButtons);
        listaRadios.forEach(element => {
            element.classList.contains('mat-radio-checked')?element.classList.remove('mat-radio-checked'):null;
        });
    }

    setData(){
        this.dataSource=new MatTableDataSource(this.listData);
        this.dataSource.paginator=this.paginator;
    }
}