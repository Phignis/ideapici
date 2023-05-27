import { Component, Input, OnInit } from '@angular/core';
import * as data from '../../../assets/JSON/pc.json';
import { Question } from '../questions-page/questions-page.component';

@Component({
  selector: 'app-setup-choice',
  templateUrl: './setup-choice.component.html',
  styleUrls: ['./setup-choice.component.css']
})
export class SetupChoiceComponent implements OnInit  {
  @Input() Answers : Question[];
  pcs: Pc[] = data;

  ngOnInit(): void {
    //console.log(this.pcs[0].system.cpu.marque);

    const questionJson = localStorage.getItem('question');
    this.Answers = JSON.parse(questionJson);
    console.log(this.pcs);
    console.log(this.Answers);

  }

  getIndicesArray(length: number): number[] {
    return Array.from({ length }, (_, index) => index);
  }
  
}

interface Pc {
  marque: string;
  nom: string;
  type: string;
  ecran?: Ecran;
  clavier?: Clavier;
  system: System;
  batterie?: Battery;
  prix: number;
}

interface System {
  ram: number;
  cpu: Cpu;
  hdd: Hdd;
  cg: Gpu;
}

interface Cpu {
  marque: string;
  nom: string;
  score: number;
  core: number;
  "frequence-max": number;
  tdp: number;
}

interface Hdd {
  capacite: number;
  type: string;
  rpm?: number;
  "vitesse-transfert": number;
}

interface Gpu {
  marque: string;
  modele: string;
  score: number;
}

interface Battery {
  capacite: number;
  autonomie: number;
}

interface Ecran {
  taille: number;
  type: string;
  dpi: number;
}

interface Clavier{
  "chiclet": boolean;
  "retroeclairage": boolean;
  "type": string;
  "pave-num":boolean;
}