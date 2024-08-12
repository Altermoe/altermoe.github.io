interface DownloadOptions {
  onStatusChange?: (status: {
    progress: number;
    speed: number;
    loaded: number
    total: number;
  }) => void
}

/**
 * 计算进度必须知道 `content-length`，
 * 计算速度则不需要。
 *
 * 下载速度的算法有多种，此处使用 已下载量/下载总耗时 的平均速度计算。
 */
export const downloadByFetch = async (url: string, options: DownloadOptions) => {
  const { onStatusChange } = options

  const response = await fetch(url)

  /** 总长度，读取 content-length */
  const total = Number(response.headers.get('Content-Length'))

  const type = response.headers.get('Content-Type') ?? undefined

  /** 已读取的字节数 */
  let bytesRead = 0

  /** 开始时间 */
  let startTime = Date.now()

  /** 数据块 */
  const blobParts: BlobPart[] = []

  /**
   * 需要在 tsconfig.json 的 compilerOptions.lib 中添加 DOM.AsyncIterable
   * 才能获得 ReadableStream 的异步迭代类型支持
   */
  for await (const value of response.body!) {
    blobParts.push(value.buffer)
    const loaded = value.byteLength
    bytesRead += loaded
    const progress = (bytesRead / total) * 100
    const speed = bytesRead / (Date.now() - startTime)
    onStatusChange?.({ progress, speed, loaded, total })
  }

  return new Blob(blobParts, { type })
}
