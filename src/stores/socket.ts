import { defineStore } from 'pinia'
import { io } from 'socket.io-client'
import type { Socket } from 'socket.io-client'
import { BSON } from 'bson'

declare namespace WsData {
  interface ClientUpdate {
    clients: string[]
  }

  interface ClientInfo {
    id: string
  }
}

export const useSocketStore = defineStore('socket', () => {
  const socket = io(import.meta.env.VITE_SOCKET_HOST)

  const status = ref('disconnect')

  socket.on('connect', () => {
    status.value = 'connect'
  })

  socket.on('disconnect', () => {
    status.value = 'disconnect'
  })

  const clients = ref<string[]>([])

  socket.on('clientsUpdate', async(message: Uint8Array) => {
    const data = (BSON.deserialize(message) as WsData.ClientUpdate)
    clients.value = data.clients
  })

  return {
    socket: socket as Socket,
    status,
    clients,
  }
})
