import { Request, Response } from 'express';

export default class PageMain {
  create(req: Request, res: Response){
    const { distancia, velocidade } = req.body;

    const Time = (distancia / velocidade) * 60;
    
    let inteiro = parseInt((Time / 60).toFixed(2));
    let resto = parseInt((Time % 60).toFixed(0));

    if(resto == 0 ){
      const resultado = inteiro + " " + "Horas";
      return res.json({resultado});
    }else{
      const resultado = inteiro + " " + "Horas" + " " + "e" + " " + resto + " " + "Minutos";
      return res.json({resultado});
    }
  }
}

