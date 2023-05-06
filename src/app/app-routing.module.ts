import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlyCss1Component } from './paginas/htmly-css1/htmly-css1.component';
import { HtmlyCss2Component } from './paginas/htmly-css2/htmly-css2.component';
import { HtmlyCss3Component } from './paginas/htmly-css3/htmly-css3.component';
import { HtmlyCss4Component } from './paginas/htmly-css4/htmly-css4.component';
import { GitComponent } from './paginas/git/git.component';

const routes: Routes = [
{
  path:'',redirectTo:'home',
  pathMatch: 'full'
},
{
  path:'html&Css1',
  component: HtmlyCss1Component
},
{
  path:'html&Css2',
  component: HtmlyCss2Component
},
{
  path:'html&Css3',
  component: HtmlyCss3Component
},
{
  path:'html&Css4',
  component: HtmlyCss4Component
},
{
  path:'git',
  component:GitComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
