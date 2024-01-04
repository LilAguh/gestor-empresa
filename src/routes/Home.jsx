import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = dayjsLocalizer(dayjs)


export default function Home() {
    return(
        <div className="Home">
            <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            messages={{
                allDay: "Todo el día",
                previous: "Anterior",
                next: "Siguiente",
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Día",
                agenda: "Agenda",
                date: "Fecha",
                time: "Hora",
                event: "Evento",
                noEventsInRange: "Sin eventos",
            }}
            style={{ height: 500 }}
            />
        </div>
        )
}