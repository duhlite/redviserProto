import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-founders',
  templateUrl: './about-founders.component.html',
  styleUrls: ['./about-founders.component.scss']
})
export class AboutFoundersComponent implements OnInit {
  industries = [
    " Consumer packaged goods, food, health, and retail: Procter and Gamble, Master Foods, Dannon, Reckitt Benckiser, Rite Aid (pharmacy), Giant Eagle (grocery), Sunoco, BP and Tosco (gas stations), Home Depot, Lowe’s.",
    " Manufacturing: Xerox, Kodak, General Motors, Mills Pride (kitchen cabinets), Little Giant (garden pumps), Delta (faucets), Welch Allyn (medical equipment), Verengo Solar (solar energy), Sunsetter (retractable awnings), Jitterbug and Avaya (phones).",
    " Restaurants: Outback Steakhouse, Red Lobster, Chili’s, and Romano’s Macaroni Grill.",
    " Cars: Volkswagen, Volvo, and Audi.",
    " Banking, finance, insurance and lending: Fidelity Investment, Esurance, AMEX, Bank One, Key Bank, Citizen Bank, Nationwide, Capital One, First United Bank, Barnone, Harvard Pilgrim, AvMed, Ace Mortgage Funding, Ditech, GMAC, Novastar/OSM, Home Loan, RFC, Oxford Lending, and iFreedom.",
    " Media and advertising: Geopath, Carat, PHD media, and Telmar.",
    " Travel, entertainment and games: Your Man Tours, Viking, Lindblad, Vantage, Colonial Williamsburg, 888.com, and Adam & Eve."]
  
  areas = [
    " Data science, artificial intelligence, machine learning (including neural networks, deep learning, reinforcement learning, etc.), statistics, simulation modeling (including agent based, system dynamics, and discrete-events modeling).",
    " Causality theory, which allows separating statistical correlations and the real causes.",
    " Statistical physics, social physics and its branch Mediaphysics, which we founded to transform facts and figures into strategic insights.",
    " Optimization.",
    " Marketing data like Nielsen, MRI, Census ACS, and others."
  ]

  constructor() { }

  ngOnInit() {
  }

}
