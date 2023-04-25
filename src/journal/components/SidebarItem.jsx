import { TurnedInNot } from '@mui/icons-material'
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { useDispatch } from 'react-redux'

export const SidebarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch() // declaramos dispatch para poder usarlo mas adelante

  const onClickNote = () => {
    // nos permite despachar o activar la nota elegida con los campos que le indicamos
    dispatch(setActiveNote({ title, body, id, date, imageUrls }))
  }

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title
  }, [title])

  return (
    <ListItem disablePadding>
      {/* le decimos que cuando clicamos en la nota llame al disparador onClickNote */}
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={title} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
