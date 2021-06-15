interface IDayMonth {
    d: string;
    m: string;
}

export const dayOfWeek = (day: number, month: number): IDayMonth => {
    var days = ['Doming', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-Feira', 'Sexta-feira', 'Sábado'];
    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const d = days[day];
    const m = months[month];

    return { d, m }
}