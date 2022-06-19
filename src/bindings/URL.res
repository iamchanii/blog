type t = {href: string, pathname: string}
@new external create: string => t = "URL"
@new external createWithBase: (string, string) => t = "URL"
